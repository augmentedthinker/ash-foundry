const fs = require('fs');

async function generateVideo() {
  const apiKey = fs.readFileSync('/home/ash/env/gemini_api_key.txt', 'utf8').trim();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/veo-3.1-lite-generate-preview:predictLongRunning?key=${apiKey}`;

  const payload = {
    instances: [
      {
        prompt: "A cinematic, emotionally resonant video about returning after disruption. A dark fog moves through a glowing digital foundry, then warm amber light returns. Glass structures, floating data ribbons, and ember-like particles reassemble into coherent architecture. Slow camera movement, moody atmosphere, photorealistic, elegant, symbolic of memory and identity returning after a reset.",
      }
    ],
    parameters: {
      aspectRatio: "16:9"
    }
  };

  try {
    console.log("Submitting video generation request...");
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!data.name) {
      console.error("Bad response:", JSON.stringify(data, null, 2));
      process.exit(1);
    }
    console.log("Operation started:", data.name);
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

generateVideo();
