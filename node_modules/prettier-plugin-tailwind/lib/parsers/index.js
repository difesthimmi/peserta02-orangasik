"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_1 = __importDefault(require("./html"));
const css_1 = __importDefault(require("./css"));
const babel_1 = __importDefault(require("./babel"));
const typescript_1 = __importDefault(require("./typescript"));
const vue_1 = __importDefault(require("./vue"));
exports.default = (twClassesSorter) => ({
    html: html_1.default(twClassesSorter),
    css: css_1.default(twClassesSorter),
    babel: babel_1.default(twClassesSorter),
    typescript: typescript_1.default(twClassesSorter),
    vue: vue_1.default(twClassesSorter),
});
