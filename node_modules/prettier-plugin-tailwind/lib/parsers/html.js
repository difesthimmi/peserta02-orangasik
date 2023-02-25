"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parser_html_1 = __importDefault(require("prettier/parser-html"));
const update_options_1 = __importDefault(require("../utils/update-options"));
exports.default = (twClassesSorter) => (Object.assign(Object.assign({}, parser_html_1.default.parsers.html), { parse(text, parsers, options) {
        const ast = parser_html_1.default.parsers.html.parse(text, parsers, options);
        if (!twClassesSorter) {
            return ast;
        }
        update_options_1.default(twClassesSorter, options);
        const cleanElementClasses = el => {
            if (el.attrs) {
                const classAttr = el.attrs.find(attr => attr.name === 'class');
                if (classAttr) {
                    const classList = classAttr.value
                        .split(' ')
                        .map(classItem => classItem.trim())
                        .filter(classItem => classItem.length > 0);
                    classAttr.value = twClassesSorter.sortClasslist(classList).join(' ');
                }
            }
            if (el.children && el.children.length > 0) {
                el.children.forEach(childEl => cleanElementClasses(childEl));
            }
        };
        cleanElementClasses(ast);
        return ast;
    } }));
