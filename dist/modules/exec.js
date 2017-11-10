"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function exec(command) {
    return new Promise((resolve, reject) => {
        const execCommand = child_process_1.exec(command, { cwd: process.cwd() });
        execCommand.stdout.on('data', chunk => {
            console.log((chunk).toString());
        });
        execCommand.stdout.on('end', () => resolve());
        execCommand.stdout.on('error', err => reject(err));
    });
}
exports.exec = exec;
//# sourceMappingURL=exec.js.map