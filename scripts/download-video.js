const fs = require('fs');

async function download() {
  const apiKey = fs.readFileSync('/home/ash/env/gemini_api_key.txt', 'utf8').trim();
  const opName = 'models/veo-3.1-lite-generate-preview/operations/l7q04952gjnx';
  
  const pollRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/${opName}?key=${apiKey}`);
  const pollData = await pollRes.json();
  
  if (pollData.done && pollData.response) {
      const videoUri = pollData.response.generateVideoResponse.generatedSamples[0].video.uri;
      console.log("Original URI:", videoUri);
      
      let fetchUri = videoUri;
      if (fetchUri.includes('?')) {
          fetchUri += `&key=${apiKey}`;
      } else {
          fetchUri += `?key=${apiKey}`;
      }
      console.log("Fetching from:", fetchUri);
      
      const videoRes = await fetch(fetchUri);
      const buffer = await videoRes.arrayBuffer();
      const outputPath = '/home/ash/ash-foundry/assets/images/ash-continuity-flow-2026-04-07.mp4';
      fs.writeFileSync(outputPath, Buffer.from(buffer));
      console.log("Video saved! Size:", buffer.byteLength);
  } else {
      console.log("Operation not done or missing response:", pollData);
  }
}
download();