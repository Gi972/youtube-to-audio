"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDockerCommand(youtubeURL) {
    const initialPart = 'docker run -i --rm -v "$(pwd):/src" jbergknoff/youtube-dl';
    const qualityPart = '-f "bestvideo[ext=mp4]+bestaudio[ext=m4a]"';
    const outputPart = '-o /src/video.mp4';
    return `${initialPart} ${qualityPart} ${outputPart} ${youtubeURL}`;
}
exports.createDockerCommand = createDockerCommand;
//# sourceMappingURL=createDockerCommand.js.map