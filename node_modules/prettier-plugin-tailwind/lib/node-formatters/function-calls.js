"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Formats function calls
//   eg: `clsx('container w-full')`
function functionCalls(twClassesSorter, node, functionNames) {
    if (node &&
        node.type === 'CallExpression' &&
        node.callee &&
        node.callee.type === 'Identifier' &&
        functionNames.some(functionName => functionName === node.callee.name)) {
        node.arguments.forEach(arg => {
            if (arg.type !== 'StringLiteral' && arg.type !== 'Literal') {
                return;
            }
            const spacesBefore = arg.value.length - arg.value.trimStart().length;
            const spacesAfter = arg.value.length - arg.value.trimEnd().length;
            const newValue = `${' '.repeat(spacesBefore)}${twClassesSorter.sortClasslist(arg.value).join(' ')}${' '.repeat(spacesAfter)}`;
            if (arg.type === 'StringLiteral') {
                arg.value = newValue;
                if (arg.extra) {
                    arg.extra.rawValue = newValue;
                    arg.extra.raw = `"${newValue}"`;
                }
            }
            else if (arg.type === 'Literal') {
                arg.value = newValue;
                arg.raw = `"${newValue}"`;
            }
        });
    }
    return node;
}
exports.default = functionCalls;
