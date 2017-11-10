"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createFfmpegCommand(output) {
    const initialPart = 'ffmpeg -i video.mp4';
    const optionsPart = '-vn -acodec libmp3lame -ac 2 -ab 160k -ar 48000';
    return `${initialPart} ${optionsPart} ${output}`;
}
exports.createFfmpegCommand = createFfmpegCommand;
//# sourceMappingURL=createFfmpegCommand.js.map