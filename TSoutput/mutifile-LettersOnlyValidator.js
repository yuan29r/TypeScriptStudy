/// <reference path="mutifile-validation.ts" />
/**這邊引用檔案來開發，上面路徑就是引用檔案 */
var Validation2;
(function (Validation2) {
    var lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation2.LettersOnlyValidator = LettersOnlyValidator;
})(Validation2 || (Validation2 = {}));
//# sourceMappingURL=mutifile-LettersOnlyValidator.js.map