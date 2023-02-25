"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
function updateOptions(twClassesSorter, options) {
    if (typeof options === 'undefined') {
        return;
    }
    twClassesSorter.classesPosition =
        options.twClassesPosition || 'components-first';
    twClassesSorter.unknownClassesPosition =
        options.twUnknownClassesPosition || 'start';
    if (options.twConfig) {
        twClassesSorter.setConfig(path_1.default.join(__dirname, '../../../..', options.twConfig));
    }
    else {
        twClassesSorter.setConfig();
    }
    twClassesSorter.setPluginOrder(defaultOrder => {
        const customOrder = options.twPluginsOrder.split(',');
        return [
            ...customOrder,
            ...defaultOrder.filter(plugin => !customOrder.includes(plugin)),
        ];
    });
}
exports.default = updateOptions;
