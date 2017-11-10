import { youtubeToAudio } from './'
const youtubeURL = 'https://www.youtube.com/watch?v=pLjaBQd3KU4'

youtubeToAudio({
  output: `${process.cwd()}/Misty_Mountain_Hop.mp3`,
  url: youtubeURL,
})
  .then(console.log)
