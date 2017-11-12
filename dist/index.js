"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const log_1 = require("log");
const createDockerCommand_1 = require("./modules/createDockerCommand");
const createFfmpegCommand_1 = require("./modules/createFfmpegCommand");
const exec_1 = require("./modules/exec");
const normalizeURL_1 = require("./modules/normalizeURL");
async function youtubeToAudio(input) {
    log_1.log('Conversion to mp4 starter', 'info');
    const dockerCommand = createDockerCommand_1.createDockerCommand(normalizeURL_1.normalizeURL(input.url));
    await exec_1.exec(dockerCommand);
    log_1.log('Conversion to mp4 is done', 'success');
    const ffmpegCommand = createFfmpegCommand_1.createFfmpegCommand(input.output);
    await exec_1.exec(ffmpegCommand);
    log_1.log('Conversion to mp3 is done', 'success');
    fs_1.unlinkSync('video.mp4');
    return;
}
exports.youtubeToAudio = youtubeToAudio;
//# sourceMappingURL=index.js.map