"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = void 0;
function generateId() {
    // Generate a random number and concatenate with current timestamp to ensure uniqueness
    const randomId = Math.floor(Math.random() * 1000000);
    const timestamp = new Date().getTime();
    return parseInt(timestamp.toString() + randomId.toString());
}
exports.generateId = generateId;
