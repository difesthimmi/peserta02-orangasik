"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tailwind_classes_sorter_1 = __importDefault(require("tailwind-classes-sorter"));
const path_1 = __importDefault(require("path"));
const parsers_1 = __importDefault(require("./parsers"));
const options_1 = __importDefault(require("./options"));
const twClassesSorter = new tailwind_classes_sorter_1.default({
    nodeModulesPath: path_1.default.join(__dirname, '../../../node_modules'),
});
module.exports = {
    parsers: parsers_1.default(twClassesSorter),
    options: options_1.default,
};
