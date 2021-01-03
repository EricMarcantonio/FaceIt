"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllImages = void 0;
var model_1 = require("../model");
var GetAllImages = function (req, res) {
    model_1.Image.find({}, function (err, items) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(items);
        }
    });
};
exports.GetAllImages = GetAllImages;
