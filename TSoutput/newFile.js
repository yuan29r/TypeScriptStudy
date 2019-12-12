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
//# sourceMappingURL=newFile.js.map