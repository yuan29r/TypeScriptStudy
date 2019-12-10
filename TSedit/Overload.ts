
function test(name: string): string;
function test(age: number): string;
function test(single: boolean): string;
function test(value: (string | number | boolean)): string {
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

//當有特定重載聲明時，一定要有一個非特定重載
interface doc {
    createElement(tagname: "div"): HTMLDivElement;//特定
    createElement(tagname: "span"): HTMLSpanElement;//特定
    createElement(tagname: "div"): HTMLCanvasElement;//特定
    createElement(tagname: "string"): HTMLElement;//非特定
}