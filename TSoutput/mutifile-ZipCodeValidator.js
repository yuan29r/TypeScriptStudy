/// <reference path="mutifile-validation.ts" />
var Validation2;
(function (Validation2) {
    var numberRegexp = /^[0-9]+$/;
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation2.ZipCodeValidator = ZipCodeValidator;
})(Validation2 || (Validation2 = {}));
//# sourceMappingURL=mutifile-ZipCodeValidator.js.map