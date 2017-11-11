import { unlinkSync } from 'fs'
import { log } from 'log'
import { createDockerCommand } from './modules/createDockerCommand'
import { createFfmpegCommand } from './modules/createFfmpegCommand'
import { exec } from './modules/exec'
import { normalizeURL } from './modules/normalizeURL'
import { Input } from './typings'

export async function youtubeToAudio(input: Input): Promise<void> {
  log('Conversion to mp4 is done', 'success')
  const dockerCommand = createDockerCommand(
    normalizeURL(input.url),
  )

  await exec(dockerCommand)
  log('Conversion to mp4 is done', 'success')
  const ffmpegCommand = createFfmpegCommand(input.output)
  await exec(ffmpegCommand)
  log('Conversion to mp3 is done', 'success')
  unlinkSync('video.mp4')

  return
}
