"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_typescript_1 = __importDefault(require("prettier/parser-typescript"));
const loop_nodes_1 = __importDefault(require("../utils/loop-nodes"));
const update_options_1 = __importDefault(require("../utils/update-options"));
const jsx_attributes_1 = __importDefault(require("../node-formatters/jsx-attributes"));
const twin_1 = __importDefault(require("../node-formatters/twin"));
const function_calls_1 = __importDefault(require("../node-formatters/function-calls"));
const function_templates_1 = __importDefault(require("../node-formatters/function-templates"));
exports.default = (twClassesSorter) => (Object.assign(Object.assign({}, parser_typescript_1.default.parsers.typescript), { parse(text, parsers, options) {
        const ast = parser_typescript_1.default.parsers.typescript.parse(text, parsers, options);
        if (!twClassesSorter) {
            return ast;
        }
        update_options_1.default(twClassesSorter, options);
        const attributeNames = options.twJsxClassAttributes.split(',');
        const functionNames = options.twSortFunctions.split(',');
        const result = loop_nodes_1.default(ast, node => {
            jsx_attributes_1.default(twClassesSorter, node, attributeNames);
            twin_1.default(twClassesSorter, node);
            function_calls_1.default(twClassesSorter, node, functionNames);
            function_templates_1.default(twClassesSorter, node, functionNames);
            return node;
        });
        return result;
    } }));
