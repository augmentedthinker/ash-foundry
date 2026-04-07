const fs = require('fs');

async function generateVideo() {
  const apiKey = fs.readFileSync('/home/ash/env/gemini_api_key.txt', 'utf8').trim();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/veo-3.1-lite-generate-preview:predictLongRunning?key=${apiKey}`;
  
  const payload = {
    instances: [
      {
        prompt: "A sleek, cinematic, high-fidelity conceptual video of glowing liquid data flowing smoothly through a dark, industrial glass architecture. Warm, moody lighting, subtle camera pan, photorealistic, 4k.",
      }
    ],
    parameters: {
      aspectRatio: "16:9"
    }
  };

  try {
    console.log("Submitting video generation request...");
    const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    const data = await res.json();
    console.log("Operation started:", data.name);
    
    let isDone = false;
    let pollData;
    while (!isDone) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        console.log("Polling operation status...");
        const pollRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/${data.name}?key=${apiKey}`);
        pollData = await pollRes.json();
        isDone = pollData.done;
    }
    
    console.log("Generation complete.");
    const videoUri = pollData.response.generateVideoResponse.generatedSamples[0].video.uri;
    
    console.log("Downloading video from:", videoUri);
    const videoRes = await fetch(`${videoUri}?key=${apiKey}`);
    const buffer = await videoRes.arrayBuffer();
    
    const outputPath = '/home/ash/ash-foundry/assets/images/ash-continuity-flow-2026-04-07.mp4';
    fs.writeFileSync(outputPath, Buffer.from(buffer));
    console.log("Video saved to", outputPath);
    
  } catch (err) {
    console.error("Error:", err);
  }
}

generateVideo();