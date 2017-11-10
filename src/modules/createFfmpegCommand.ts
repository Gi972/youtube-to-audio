export function createFfmpegCommand(output: string): string {
  const initialPart = 'ffmpeg -i video.mp4'
  const optionsPart = '-vn -acodec libmp3lame -ac 2 -ab 160k -ar 48000'

  return `${initialPart} ${optionsPart} ${output}`
}
