"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Formats JSX attributes
//   eg: `<div className="container w-full"></div>`
function jsxAttributes(twClassesSorter, node, attributeNames) {
    if (node &&
        node.type === 'JSXAttribute' &&
        node.name &&
        node.name.type === 'JSXIdentifier' &&
        attributeNames.includes(node.name.name) &&
        node.value &&
        (node.value.type === 'StringLiteral' || node.value.type === 'Literal')) {
        const newValue = twClassesSorter.sortClasslist(node.value.value).join(' ');
        node.value.value = newValue;
        node.value.extra = Object.assign(Object.assign({}, (node.value.extra || {})), { rawValue: newValue, raw: `"${newValue}"` });
    }
    return node;
}
exports.default = jsxAttributes;
