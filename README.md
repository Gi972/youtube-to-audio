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

const youtubeURL = 'https://www.youtube.com/watch?v=pLjaBQd3KU4'

youtubeToAudio({
  output: `${process.cwd()}/Misty_Mountain_Hop.mp3`,
  url: youtubeURL,
})
  .then(console.log)
```