var obj = { a: 1, b: "tr", c: true };
for (var key in obj) {
    console.log(key + "=" + obj[key]);
}
class character {
    constructor(firstname, lastname) {
        this.fullname = firstname + lastname;
    }
    greet(name) {
        if (name) {
            return "hi!" + name + "問候";
        }
        else {
            return "hi!! my name is " + this.fullname;
        }
    }
}
var spark = new character("增", "隨意");
var msg = spark.greet();
//alert(msg);
console.log(msg);
var msg2 = spark.greet("測試人員");
//alert(msg2);
console.log(msg2);
//# sourceMappingURL=looplist.js.map