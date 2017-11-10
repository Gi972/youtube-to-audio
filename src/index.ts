export function fn(x: string): void {

  return
}

// docker run -it --rm -v "$(pwd):/src" jbergknoff/youtube-dl -f 'bestvideo[ext=mp4]+bestaudio[ext=m4a]' -o /src/video.mp4 https://www.youtube.com/watch?v=sRP2We4FRP4

// ffmpeg -i video.mp4 -vn -acodec libmp3lame -ac 2 -ab 160k -ar 48000 audio.mp3