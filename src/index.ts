import { createDockerCommand } from './modules/createDockerCommand'
import { createFfmpegCommand } from './modules/createFfmpegCommand'
import { exec } from './modules/exec'

export async function youtubeToAudio(input: Input): Promise<void> {
  const dockerCommand = createDockerCommand(input.url)
  // await exec(dockerCommand)
  const ffmpegCommand = createFfmpegCommand(input.output)
  await exec(ffmpegCommand)

  return
}

const youtubeURL = 'https://www.youtube.com/watch?v=sRP2We4FRP4'

youtubeToAudio({
  output: `${process.cwd()}/no-quarter.mp3`,
  url: youtubeURL,
})
  .then(console.log)
