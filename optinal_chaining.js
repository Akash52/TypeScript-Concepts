//optional chaining
function serializeJSON(value, options) {
    var _a;
    var indent = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indentSize;
    return JSON.stringify(value, null, indent);
}
var user = {
    name: 'John',
    twitter: '@john',
    website: 'www.john.com'
};
var json = serializeJSON(user, {
    formatting: {
        indentSize: 2
    }
});
console.log(json);
//For avoiding nested coditionals
//we can use the optional chaining operator
//optional chaining is a feature of TypeScript that allows us to access properties of an object that might not exist.
// options
//     ? options.formatting
//       ? options.formatting.indentSize
//       : undefined
//     : undefined;
