/**我們可以隨意的設置fullName，這是非常方便的，
 * 但是這也可能會帶來麻煩。 */
class Employee2 {
    fullName: string;
}

var employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    alert(employee2.fullName);
}

/**下面製作set and get */
var passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }
  
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            alert("Error: Unauthorized update of employee!");
        }
    }
}

var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}