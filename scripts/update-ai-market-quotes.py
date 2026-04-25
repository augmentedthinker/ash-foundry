#!/usr/bin/env python3
import csv, json, time, urllib.request
from datetime import datetime, timezone

WATCHLIST = [
    ('NVDA','Nvidia','nvda.us'),('AMD','AMD','amd.us'),('TSM','TSMC','tsm.us'),('AVGO','Broadcom','avgo.us'),('ARM','Arm','arm.us'),('SMCI','Super Micro','smci.us'),
    ('MSFT','Microsoft','msft.us'),('GOOGL','Alphabet','googl.us'),('AMZN','Amazon','amzn.us'),('META','Meta','meta.us'),('ASML','ASML','asml.us'),('MU','Micron','mu.us'),
    ('SMH','VanEck Semiconductor ETF','smh.us'),('SOXX','iShares Semiconductor ETF','soxx.us'),('QQQ','Nasdaq 100 ETF','qqq.us')
]

def fetch(symbol):
    url=f'https://stooq.com/q/l/?s={symbol}&f=sd2t2ohlcv&h&e=csv'
    with urllib.request.urlopen(url, timeout=20) as r:
        text=r.read().decode('utf-8', errors='replace')
    row=next(csv.DictReader(text.splitlines()))
    if row.get('Close') in (None, 'N/D', ''):
        raise RuntimeError(f'no quote for {symbol}: {row}')
    return row

quotes={}
errors=[]
for ticker, name, stooq in WATCHLIST:
    try:
        row=fetch(stooq)
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
        errors.append({'ticker':ticker,'error':str(e)})
    time.sleep(0.25)

payload={
    'updatedAt': datetime.now(timezone.utc).isoformat(),
    'updatedBy': 'Ash via scripts/update-ai-market-quotes.py',
    'note': 'Delayed quotes for AI Market Lab paper-trading only. Not financial advice.',
    'quotes': quotes,
    'errors': errors
}
with open('data/ai-market-quotes.json','w') as f:
    json.dump(payload,f,indent=2,sort_keys=True)
    f.write('\n')
print(f'wrote {len(quotes)} quotes; errors={len(errors)}')
