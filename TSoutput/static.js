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
//# sourceMappingURL=static.js.map