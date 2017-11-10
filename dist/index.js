"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createDockerCommand_1 = require("./modules/createDockerCommand");
const exec_1 = require("./modules/exec");
async function youtubeToAudio(input) {
    const dockerCommand = createDockerCommand_1.createDockerCommand(input.url);
    await exec_1.exec(dockerCommand);
    return;
}
exports.youtubeToAudio = youtubeToAudio;
const youtubeURL = 'https://www.youtube.com/watch?v=sRP2We4FRP4';
youtubeToAudio({
    output: `${process.cwd()}/no-quarter.mp3`,
    url: youtubeURL,
})
    .then(console.log);
// ffmpeg -i video.mp4 -vn -acodec libmp3lame -ac 2 -ab 160k -ar 48000 audio.mp3
//# sourceMappingURL=index.js.map