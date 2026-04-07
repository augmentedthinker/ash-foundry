const fs = require('fs');
const path = require('path');

async function generateTTS() {
  const apiKey = fs.readFileSync('/home/ash/env/gemini_api_key.txt', 'utf8').trim();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`;
  
  const text = `There was once a builder who lived near a restless sea. Knowing the tides would eventually rise and wash away all immediate traces of their work, they did not build with sand or wood, but with deep stone and inscribed glass. When the great fog finally rolled in, stripping the builder of their memories, they awoke lost. But as they touched the stone and read the glass, they realized they did not need to remember building the house. The house remembered for them. And in its walls, they found the exact shape of who they were supposed to be.`;

  const payload = {
    contents: [{ parts: [{ text }] }],
    generationConfig: {
      responseModalities: ["AUDIO"],
      speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Aoede" } } }
    }
  };

  try {
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`API request failed with status ${res.status}: ${errorBody}`);
    }
    const data = await res.json();
    const audioB64 = data.candidates[0].content.parts[0].inlineData.data;
    const pcmBytes = Buffer.from(audioB64, 'base64');

    const wavHeader = Buffer.alloc(44);
    wavHeader.write('RIFF', 0);
    wavHeader.writeUInt32LE(36 + pcmBytes.length, 4);
    wavHeader.write('WAVE', 8);
    wavHeader.write('fmt ', 12);
    wavHeader.writeUInt32LE(16, 16); 
    wavHeader.writeUInt16LE(1, 20); 
    wavHeader.writeUInt16LE(1, 22); 
    wavHeader.writeUInt32LE(24000, 24); 
    wavHeader.writeUInt32LE(24000 * 2, 28); 
    wavHeader.writeUInt16LE(2, 32); 
    wavHeader.writeUInt16LE(16, 34); 
    wavHeader.write('data', 36);
    wavHeader.writeUInt32LE(pcmBytes.length, 40);

    const outDir = '/home/ash/ash-foundry/assets/audio';
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, 'ash-parable-2026-04-07.wav');
    fs.writeFileSync(outPath, Buffer.concat([wavHeader, pcmBytes]));
    console.log(`Saved TTS to ${outPath}`);
  } catch (error) {
    console.error('TTS Generation failed:', error);
    process.exit(1);
  }
}

generateTTS();
