define(["require", "exports"], function (require, exports) {
    "use strict";
    var lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    return LettersOnlyValidator;
});
//# sourceMappingURL=Modules-LettersOnlyValidator-copy.js.map