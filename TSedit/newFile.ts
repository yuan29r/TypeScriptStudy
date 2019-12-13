interface SearchFunc{
    (source:string,qrystring:string):boolean;
}
//把介面當行別使用
var mySearch:SearchFunc;
mySearch=function(source:string,qrystring:string){
    var res=source.search(qrystring);
    if(res==-1)
    {
        return false;
    }
    else
    {
        return true;
    }
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}
//實作介面
class Clock implements ClockInterface{
    currentTime:Date;
    constructor(h:number,m:number){

    }
    setTime(d:Date){
        this.currentTime=d;
    }
}

/*******************************************/
interface Clock2Static {
    new (hour: number, minute: number);
}

class Clock2 {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: Clock2Static = Clock2;
var newClock = new cs(7, 30);
/****************************************** */

/**介面擴充***********************************/
interface Shape {
    color: string;
}
//繼承一個介面
interface Square extends Shape {
    sideLength:number;
}
var square = <Square>{};
square.color="";
square.sideLength=10;

interface PenStroke {
    penWidth: number;
}
//繼承多個介面
interface Square2 extends Shape,PenStroke {
    sideLength:number;
}

var square2 = <Square2>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;

interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}

var c:Counter;
c(10);
c.reset();
c.interval=5;

//**************************************下面就像在寫C#和JAVA */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("world");

/******************************************繼承 */
/*class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        alert(`${this.name} moved ${distanceInMeters}m.`);
    }
}*/
/*注意看我們是如何捨棄了theName，
僅在建構函式裡使用private name: string參數來建立和初始化name成員。 
我們把宣告和賦值合併至一處。*/
class Animal {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        alert(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        alert("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        alert("Galloping...");
        super.move(distanceInMeters);
    }
}

var sam = new Snake("Sammy the Python");
var tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/*****************************************************protected */
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;
    
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    //這邊還是可以使用protected宣告的變數喔
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

var howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());

