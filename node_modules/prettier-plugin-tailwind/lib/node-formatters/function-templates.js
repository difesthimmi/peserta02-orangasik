"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Formats function templates
//   eg: `clsx\`container w-full\``
function functionTemplates(twClassesSorter, node, functionNames) {
    if (node &&
        node.type === 'TaggedTemplateExpression' &&
        node.tag &&
        node.tag.type === 'Identifier' &&
        functionNames.some(functionName => functionName === node.tag.name) &&
        node.quasi &&
        node.quasi.type === 'TemplateLiteral' &&
        node.quasi.quasis) {
        node.quasi.quasis.forEach(quasi => {
            if (quasi.type !== 'TemplateElement' || !quasi.value) {
                return;
            }
            const spacesBefore = quasi.value.raw.length - quasi.value.raw.trimStart().length;
            const spacesAfter = quasi.value.raw.length - quasi.value.raw.trimEnd().length;
            const newValue = `${' '.repeat(spacesBefore)}${twClassesSorter.sortClasslist(quasi.value.raw).join(' ')}${' '.repeat(spacesAfter)}`;
            quasi.value = Object.assign(Object.assign({}, quasi.value), { raw: newValue, cooked: newValue });
        });
    }
    return node;
}
exports.default = functionTemplates;
