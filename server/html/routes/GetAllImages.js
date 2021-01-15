"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllImages = void 0;
var model_1 = require("../model");
exports.GetAllImages = function (req, res) {
    model_1.Image.find({}, function (err, items) {
        if (err) {
            console.log(err);
            res.sendStatus(400);
        }
        else {
            res.json(items);
        }
    });
};
