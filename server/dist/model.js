"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Image = void 0;
var mongoose_1 = require("mongoose");
var imageSchema = new mongoose_1.Schema({
    img: {
        data: Buffer,
        contentType: String,
        features: JSON,
    },
});
var userSchema = new mongoose_1.Schema({
    name: String,
    relatedPictureIDs: [String],
});
exports.Image = mongoose_1.model('Image', imageSchema);
exports.User = mongoose_1.model('User', userSchema);
