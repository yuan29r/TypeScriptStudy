/// <reference path="../TSedit/mutifile-validation.ts" />
var Validation2;
(function (Validation2) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation2.LettersOnlyValidator = LettersOnlyValidator;
})(Validation2 || (Validation2 = {}));
/// <reference path="mutifile-validation.ts" />
var Validation2;
(function (Validation2) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation2.ZipCodeValidator = ZipCodeValidator;
})(Validation2 || (Validation2 = {}));
/// <reference path="mutifile-validation.ts" />
/// <reference path="mutifile-LettersOnlyValidator.ts" />
/// <reference path="mutifile-ZipCodeValidator.ts" />
/**因為我們採用namespace,所以在使用方法前面都要加上namespace */
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new Validation2.ZipCodeValidator();
validators['Letters only'] = new Validation2.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
/**這邊意要注意一下
 * 編譯成一個檔案模式，範例指令：
 * tsc --out mutifile-refallfile.js mutifile-refallfile.ts
 *
 * 單獨地指定每個檔，範例指令：
 * tsc --out mutifile-refallfile.js mutifile-validation.ts mutifile-LettersOnlyValidator.ts mutifile-ZipCodeValidator.ts mutifile-refallfile.ts
 * 這種編譯模式是每一個ts檔案都是獨立一個js檔案
 * 所以你可能需要類似下面引用
 * <script src="mutifile-Validation.js" type="text/javascript" />
 * <script src="mutifile-LettersOnlyValidator.js" type="text/javascript" />
 * <script src="mutifile-ZipCodeValidator.js" type="text/javascript" />
 * <script src="mutifile-refallfile.js" type="text/javascript" />
 */ 
