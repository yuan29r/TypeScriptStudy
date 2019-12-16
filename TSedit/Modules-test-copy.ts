import validation = require('./Modules-Validation');
import zip = require('./Modules-ZipCodeValidator-copy');
import letters = require('./Modules-LettersOnlyValidator-copy');

// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators: { [s: string]: validation.IStringValidator; } = {};
validators['ZIP code'] = new zip();
validators['Letters only'] = new letters();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});

/**編譯有兩種選擇
 * module選擇 commonjs 就用下面
 * ts --module commonjs Test.ts
 * module選擇 requirejs 就用下面 ,下面這個輸出會變成一個檔案
 * tsc --out ./TSoutput/Modules-test-copy.js  --module amd ./TSedit/Modules-test-copy.ts
 */