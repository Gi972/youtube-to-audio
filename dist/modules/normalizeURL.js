"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rambdax_1 = require("rambdax");
function normalizeURL(url) {
    return rambdax_1.compose(rambdax_1.head, rambdax_1.identity, rambdax_1.split('&'))(url);
}
exports.normalizeURL = normalizeURL;
//# sourceMappingURL=normalizeURL.js.map