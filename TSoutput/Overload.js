function test(value) {
    var res = "";
    switch (typeof value) {
        case "string":
            res = "字串";
            break;
        case "number":
            res = "數字";
            break;
        case "boolean":
            res = "布林";
            break;
        default:
            res = "不再指定的型別";
    }
    console.log("\u578B\u5225\u9A57\u8B49\u7D50\u679C\uFF1A" + res);
    return res;
}
//# sourceMappingURL=Overload.js.map