"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var mongoose_1 = require("mongoose");
var imageSchema = new mongoose_1.Schema({
    img: {
        data: Buffer,
        contentType: String,
        features: JSON,
    },
});
exports.Image = mongoose_1.model('Image', imageSchema);
