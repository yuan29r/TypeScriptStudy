/**在TypeScript裡，任何含有頂層import和export的檔案都會被視為模組。 */
/** 
 * 要使用import 要注意requirejs有無安裝  指令:npm i requirejs
 * tsconfig 要加入 "module": "AMD", 不然他不知道你使用什麼模組
*/
export interface IStringValidator {
    isAcceptable(s: string): boolean;
}