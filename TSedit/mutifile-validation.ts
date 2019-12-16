/**這邊要測試多個檔案使用相同 namspace */
namespace Validation2  {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }    
}