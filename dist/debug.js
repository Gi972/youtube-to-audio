"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const youtubeURL = 'https://www.youtube.com/watch?v=pLjaBQd3KU4';
_1.youtubeToAudio({
    output: `${process.cwd()}/Misty_Mountain_Hop.mp3`,
    url: youtubeURL,
})
    .then(console.log);
//# sourceMappingURL=debug.js.map