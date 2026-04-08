const fs = require('fs');

async function download() {
  const apiKey = fs.readFileSync('/home/ash/env/gemini_api_key.txt', 'utf8').trim();
  const opName = 'models/veo-3.1-lite-generate-preview/operations/3yudfuwjdznj';

  while (true) {
    const pollRes = await fetch(`https://generativelanguage.googleapis.com/v1beta/${opName}?key=${apiKey}`);
    const pollData = await pollRes.json();

    if (pollData.done && pollData.response) {
      const videoUri = pollData.response.generateVideoResponse.generatedSamples[0].video.uri;
      let fetchUri = videoUri.includes('?') ? `${videoUri}&key=${apiKey}` : `${videoUri}?key=${apiKey}`;
      const videoRes = await fetch(fetchUri);
      const buffer = await videoRes.arrayBuffer();
      const outputPath = '/home/ash/ash-foundry/assets/images/ash-fog-return-2026-04-07.mp4';
      fs.writeFileSync(outputPath, Buffer.from(buffer));
      console.log('Video saved!', outputPath, buffer.byteLength);
      break;
    }

    if (pollData.done && pollData.error) {
      console.error('Generation failed:', JSON.stringify(pollData.error, null, 2));
      process.exit(1);
    }

    console.log('Still rendering...');
    await new Promise(resolve => setTimeout(resolve, 10000));
  }
}

download();
