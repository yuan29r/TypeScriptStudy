define(["require", "exports", "./Modules-ZipCodeValidator", "./Modules-LettersOnlyValidator"], function (require, exports, zip, letters) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Some samples to try
    var strings = ['Hello', '98052', '101'];
    // Validators to use
    var validators = {};
    validators['ZIP code'] = new zip.ZipCodeValidator();
    validators['Letters only'] = new letters.LettersOnlyValidator();
    // Show whether each string passed each validator
    strings.forEach(s => {
        for (var name in validators) {
            console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
        }
    });
});
/**編譯有兩種選擇
 * module選擇 commonjs 就用下面
 * ts --module commonjs Test.ts
 * module選擇 requirejs 就用下面 ,下面這個輸出會變成一個檔案
 * tsc --out ./TSoutput/Modules-test.js  --module amd ./TSedit/Modules-test.ts
 */ 
//# sourceMappingURL=Modules-test.js.map