import { shellSync } from 'execa'
import { createDockerCommand } from './modules/createDockerCommand'
import { exec } from './modules/exec'

export async function youtubeToAudio(input: Input): Promise<void> {
  const dockerCommand = createDockerCommand(input.url)
  await exec(dockerCommand)

  return
}

const youtubeURL = 'https://www.youtube.com/watch?v=sRP2We4FRP4'

youtubeToAudio({
  output: `${process.cwd()}/no-quarter.mp3`,
  url: youtubeURL,
})
  .then(console.log)

// ffmpeg -i video.mp4 -vn -acodec libmp3lame -ac 2 -ab 160k -ar 48000 audio.mp3
