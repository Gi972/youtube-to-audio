# Youtube-to-audio

Convert Youtube URL to MP3 file

## Requirements

- FFmpeg
- Docker

## Install

`yarn add https://github.com/selfrefactor/youtube-to-audio#0.1.0`

## Usage

```
import {youtubeToAudio} from 'youtube-to-audio'
const youtubeURL = 'https://www.youtube.com/watch?v=sRP2We4FRP4'

youtubeToAudio({
  url: youtubeURL,
  output: `${process.env()}/no-quarter.mp3`
})
  .then(console.log)
```