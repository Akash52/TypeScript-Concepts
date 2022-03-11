//nullish coalescing operator is used to return a default value if the value is null or undefined
function serializeJSON(value, options) {
    var _a, _b;
    var indent = (_b = (_a = options === null || options === void 0 ? void 0 : options.formatting) === null || _a === void 0 ? void 0 : _a.indentSize) !== null && _b !== void 0 ? _b : 2;
    return JSON.stringify(value, null, indent);
}
var user = {
    name: 'John',
    twitter: '@john',
    website: 'www.john.com'
};
var json = serializeJSON(user, {
    formatting: {
        indentSize: 4
    }
});
console.log(json);
// //OR operator
// null || 2; //2
// undefined; //2
// false || 2; //2
// //nullish coalescing operator
// null ?? 2; //2
// undefined ?? 2; //2
// false ?? 2; //2
// 0 ?? 2; //0
// '' ?? 2; //''
// NaN ?? 2; //NaN
