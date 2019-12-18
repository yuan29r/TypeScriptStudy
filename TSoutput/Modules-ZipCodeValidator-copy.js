define(["require", "exports"], function (require, exports) {
    "use strict";
    var numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    return ZipCodeValidator;
});
//# sourceMappingURL=Modules-ZipCodeValidator-copy.js.map