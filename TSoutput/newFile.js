//把介面當行別使用
var mySearch;
mySearch = function (source, qrystring) {
    var res = source.search(qrystring);
    if (res == -1) {
        return false;
    }
    else {
        return true;
    }
};
//實作介面
class Clock {
    constructor(h, m) {
    }
    setTime(d) {
        this.currentTime = d;
    }
}
class Clock2 {
    constructor(h, m) { }
}
var cs = Clock2;
var newClock = new cs(7, 30);
var square = {};
square.color = "";
square.sideLength = 10;
var square2 = {};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
var c;
c(10);
c.reset();
c.interval = 5;
//**************************************下面就像在寫C#和JAVA */
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
var greeter = new Greeter("world");
/******************************************繼承 */
class Animal {
    constructor(theName) { this.name = theName; }
    move(distanceInMeters = 0) {
        alert(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        alert("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 45) {
        alert("Galloping...");
        super.move(distanceInMeters);
    }
}
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/*****************************************************protected */
class Person {
    constructor(name) { this.name = name; }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    //這邊還是可以使用protected宣告的變數喔
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
//# sourceMappingURL=newFile.js.map