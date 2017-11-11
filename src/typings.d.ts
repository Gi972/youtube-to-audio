export interface Input {
  url: string
  output: string
}

export function youtubeToAudio(input: Input): Promise<void>
