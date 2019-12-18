/**有點邪惡的用法：三個點+名稱然後宣告為陣列就可以無上限接收變數 */
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
//# sourceMappingURL=fn01.js.map