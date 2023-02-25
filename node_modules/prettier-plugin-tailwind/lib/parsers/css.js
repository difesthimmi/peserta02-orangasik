"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_postcss_1 = __importDefault(require("prettier/parser-postcss"));
const loop_nodes_1 = __importDefault(require("../utils/loop-nodes"));
const update_options_1 = __importDefault(require("../utils/update-options"));
exports.default = (twClassesSorter) => (Object.assign(Object.assign({}, parser_postcss_1.default.parsers.css), { parse(text, parsers, options) {
        const ast = parser_postcss_1.default.parsers.css.parse(text, parsers, options);
        if (!twClassesSorter) {
            return ast;
        }
        update_options_1.default(twClassesSorter, options);
        const result = loop_nodes_1.default(ast, node => {
            if (node &&
                node.type === 'css-atrule' &&
                node.name === 'apply' &&
                node.params) {
                const newValue = twClassesSorter.sortClasslist(node.params).join(' ');
                node.params = newValue;
            }
            return node;
        });
        return result;
    } }));
