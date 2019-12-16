/** 
 * 要使用import 要注意requirejs有無安裝  指令:npm i requirejs
 * tsconfig 要加入 "module": "AMD", 不然他不知道你使用什麼模組
*/
import validation3 = require('./Modules-validation');
var numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements validation3.IStringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}