/** 
 * 要使用import 要注意requirejs有無安裝  指令:npm i requirejs
 * tsconfig 要加入 "module": "AMD", 不然他不知道你使用什麼模組
*/
import validation2 = require('./Modules-Validation');
var lettersRegexp = /^[A-Za-z]+$/;
class LettersOnlyValidator implements validation2.IStringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}
export = LettersOnlyValidator;