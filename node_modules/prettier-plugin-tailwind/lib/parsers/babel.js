"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_babel_1 = __importDefault(require("prettier/parser-babel"));
const loop_nodes_1 = __importDefault(require("../utils/loop-nodes"));
const update_options_1 = __importDefault(require("../utils/update-options"));
const jsx_attributes_1 = __importDefault(require("../node-formatters/jsx-attributes"));
const function_calls_1 = __importDefault(require("../node-formatters/function-calls"));
const function_templates_1 = __importDefault(require("../node-formatters/function-templates"));
exports.default = (twClassesSorter) => (Object.assign(Object.assign({}, parser_babel_1.default.parsers.babel), { parse(text, parsers, options) {
        const ast = parser_babel_1.default.parsers.babel.parse(text, parsers, options);
        if (!twClassesSorter) {
            return ast;
        }
        update_options_1.default(twClassesSorter, options);
        const attributeNames = options.twJsxClassAttributes.split(',');
        const functionNames = options.twSortFunctions.split(',');
        const result = loop_nodes_1.default(ast, node => {
            jsx_attributes_1.default(twClassesSorter, node, attributeNames);
            function_calls_1.default(twClassesSorter, node, functionNames);
            function_templates_1.default(twClassesSorter, node, functionNames);
            return node;
        });
        return result;
    } }));
