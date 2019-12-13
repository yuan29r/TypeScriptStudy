/**
 * 命名空間和模組
 * 這節會列出多種在TypeScript裡組織程式碼的方法。
 * 我們將介紹命名空間（之前叫做“內部模組(Internal modules)”）
 * 和模組（之前叫做“外部模組(External modules)”）
 * 並且會討論在什麼樣的場合下適合使用它們以及怎樣使用它們。
 * 我們也會涉及到一些進階主題，如怎麼使用外部模組，
 * 當使用TypeScript模組時如何避免常見的陷阱。
*/
//當設定namespace時，如果想讓裡面方法界面可以被外部使用，必須加上export
var Valdation;
(function (Valdation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Valdation.LettersOnlyValidator = LettersOnlyValidator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Valdation.ZipCodeValidator = ZipCodeValidator;
})(Valdation || (Valdation = {}));
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use 下面介面宣告和方法使用都要加入命名空間名稱
var validators = {};
validators['ZIP code'] = new Valdation.ZipCodeValidator();
validators['Letters only'] = new Valdation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
//# sourceMappingURL=internal-external-modules.js.map