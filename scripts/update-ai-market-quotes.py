#!/usr/bin/env python3
import csv, json, time, urllib.request
from datetime import datetime, timezone, timedelta
from pathlib import Path

WATCHLIST = [
    ('NVDA','Nvidia','nvda.us'),('AMD','AMD','amd.us'),('TSM','TSMC','tsm.us'),('AVGO','Broadcom','avgo.us'),('ARM','Arm','arm.us'),('SMCI','Super Micro','smci.us'),
    ('MSFT','Microsoft','msft.us'),('GOOGL','Alphabet','googl.us'),('AMZN','Amazon','amzn.us'),('META','Meta','meta.us'),('ASML','ASML','asml.us'),('MU','Micron','mu.us'),
    ('SMH','VanEck Semiconductor ETF','smh.us'),('SOXX','iShares Semiconductor ETF','soxx.us'),('QQQ','Nasdaq 100 ETF','qqq.us')
]

def fetch_stooq_quote(symbol):
    url=f'https://stooq.com/q/l/?s={symbol}&f=sd2t2ohlcv&h&e=csv'
    with urllib.request.urlopen(url, timeout=20) as r:
        text=r.read().decode('utf-8', errors='replace')
    row=next(csv.DictReader(text.splitlines()))
    if row.get('Close') in (None, 'N/D', ''):
        raise RuntimeError(f'no quote for {symbol}: {row}')
    return row

def fetch_yahoo_history(ticker, days=90):
    period2 = int(datetime.now(timezone.utc).timestamp())
    period1 = int((datetime.now(timezone.utc) - timedelta(days=days)).timestamp())
    url = f'https://query1.finance.yahoo.com/v8/finance/chart/{ticker}?period1={period1}&period2={period2}&interval=1d'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        data = json.loads(r.read().decode('utf-8', errors='replace'))
    result = (data.get('chart', {}).get('result') or [None])[0]
    if not result:
        raise RuntimeError(f'no yahoo chart result for {ticker}: {data.get("chart", {}).get("error")}')
    timestamps = result.get('timestamp') or []
    closes = (((result.get('indicators') or {}).get('quote') or [{}])[0]).get('close') or []
    series = []
    for ts, close in zip(timestamps, closes):
        if close is None:
            continue
        series.append({
            'updatedAt': datetime.fromtimestamp(ts, timezone.utc).isoformat(),
            'date': datetime.fromtimestamp(ts, timezone.utc).date().isoformat(),
            'close': round(float(close), 4),
            'source': 'Yahoo Finance chart endpoint (unofficial)'
        })
    return series

quotes={}
errors=[]
run_updated_at = datetime.now(timezone.utc).isoformat()

for ticker, name, stooq in WATCHLIST:
    try:
        row=fetch_stooq_quote(stooq)
        quotes[ticker]={
            'name': name,
            'sourceSymbol': row.get('Symbol'),
            'date': row.get('Date'),
            'time': row.get('Time'),
            'open': float(row.get('Open')),
            'high': float(row.get('High')),
            'low': float(row.get('Low')),
            'close': float(row.get('Close')),
            'volume': int(float(row.get('Volume') or 0)),
            'source': 'Stooq delayed quote'
        }
    except Exception as e:
        errors.append({'ticker':ticker,'quoteError':str(e)})
    time.sleep(0.25)

history_payload = {'history': {}}
history = history_payload['history']
for ticker, _name, _stooq in WATCHLIST:
    try:
        series = fetch_yahoo_history(ticker, days=90)
        if series:
            history[ticker] = series[-90:]
        elif ticker in quotes:
            history[ticker] = [{'updatedAt': run_updated_at, 'date': quotes[ticker].get('date'), 'time': quotes[ticker].get('time'), 'close': quotes[ticker].get('close'), 'source': 'Stooq delayed quote'}]
    except Exception as e:
        errors.append({'ticker': ticker, 'historyError': str(e)})
        if ticker in quotes:
            history[ticker] = [{'updatedAt': run_updated_at, 'date': quotes[ticker].get('date'), 'time': quotes[ticker].get('time'), 'close': quotes[ticker].get('close'), 'source': 'Stooq delayed quote'}]
    time.sleep(0.15)

history_payload['updatedAt'] = run_updated_at
history_payload['note'] = 'Durable quote history for AI Market Lab. Historical closes use Yahoo Finance chart endpoint (unofficial); current snapshots use delayed Stooq quotes. Paper-trading only.'
Path('data/ai-market-history.json').write_text(json.dumps(history_payload, indent=2, sort_keys=True) + '\n')

payload={
    'updatedAt': run_updated_at,
    'updatedBy': 'Ash via scripts/update-ai-market-quotes.py',
    'note': 'Delayed quotes for AI Market Lab paper-trading only. Not financial advice.',
    'quotes': quotes,
    'errors': errors
}
Path('data/ai-market-quotes.json').write_text(json.dumps(payload, indent=2, sort_keys=True) + '\n')
print(f'wrote {len(quotes)} quotes; history={len(history)} tickers; errors={len(errors)}')
