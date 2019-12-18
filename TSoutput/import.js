var Shapes;
(function (Shapes) {
    let Polygons;
    (function (Polygons) {
        class Triangle {
        }
        Polygons.Triangle = Triangle;
        class Square {
        }
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
})(Shapes || (Shapes = {}));
var p = Shapes.Polygons;
var sq = new p.Square();
//# sourceMappingURL=import.js.map