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
    console.log(`型別驗證結果：${res}`);
    return res;
}
//# sourceMappingURL=Overload.js.map