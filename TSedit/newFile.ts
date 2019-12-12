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

/**介面擴充 */
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