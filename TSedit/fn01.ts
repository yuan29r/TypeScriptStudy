
/**有點邪惡的用法：三個點+名稱然後宣告為陣列就可以無上限接收變數 */
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
  
  var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
  

