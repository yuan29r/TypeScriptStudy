define("Modules-Validation", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("Modules-ZipCodeValidator", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    exports.ZipCodeValidator = ZipCodeValidator;
});
define("Modules-LettersOnlyValidator", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    exports.LettersOnlyValidator = LettersOnlyValidator;
});
define("Modules-test", ["require", "exports", "Modules-ZipCodeValidator", "Modules-LettersOnlyValidator"], function (require, exports, zip, letters) {
    "use strict";
    exports.__esModule = true;
    // Some samples to try
    var strings = ['Hello', '98052', '101'];
    // Validators to use
    var validators = {};
    validators['ZIP code'] = new zip.ZipCodeValidator();
    validators['Letters only'] = new letters.LettersOnlyValidator();
    // Show whether each string passed each validator
    strings.forEach(function (s) {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
});
