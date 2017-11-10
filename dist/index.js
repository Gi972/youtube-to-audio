"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createDockerCommand_1 = require("./modules/createDockerCommand");
const createFfmpegCommand_1 = require("./modules/createFfmpegCommand");
const exec_1 = require("./modules/exec");
async function youtubeToAudio(input) {
    const dockerCommand = createDockerCommand_1.createDockerCommand(input.url);
    // await exec(dockerCommand)
    const ffmpegCommand = createFfmpegCommand_1.createFfmpegCommand(input.output);
    await exec_1.exec(ffmpegCommand);
    return;
}
exports.youtubeToAudio = youtubeToAudio;
const youtubeURL = 'https://www.youtube.com/watch?v=sRP2We4FRP4';
youtubeToAudio({
    output: `${process.cwd()}/no-quarter.mp3`,
    url: youtubeURL,
})
    .then(console.log);
//# sourceMappingURL=index.js.map