/**靜態變數和使用
 * origin宣告為靜態，
 * 所以在方法理要使用這個變數需要加上類別名稱
 * Grid.origin
 */
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
alert(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
alert(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
/** */
class Greeter2 {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}
Greeter2.standardGreeting = "Hello, there";
var greeter1;
greeter1 = new Greeter2();
alert(greeter1.greet());
/* typeof Greeter2式取得型別的意思，
把class Greeter2 給greeterMaker，
所以greeterMaker就是個class,而且和Greeter2一模一樣的類別意思*/
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
alert(greeter2.greet());
//# sourceMappingURL=static.js.map