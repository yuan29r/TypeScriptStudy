/// <reference path="mutifile-validation.ts" />
/**這邊引用檔案來開發，上面路徑就是引用檔案 */
namespace Validation2 {
    var lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}