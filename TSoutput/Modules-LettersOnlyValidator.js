define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    exports.LettersOnlyValidator = LettersOnlyValidator;
});
//# sourceMappingURL=Modules-LettersOnlyValidator.js.map