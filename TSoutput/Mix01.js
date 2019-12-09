var Geometry;
(function (Geometry) {
    var Vector = /** @class */ (function () {
        function Vector(x, y) {
            this._x = x;
            this._y = y;
        }
        Vector.prototype.toArray = function (callback) {
            callback([this._x, this._y]);
        };
        Vector.prototype.length = function () {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        };
        Vector.prototype.normalize = function () {
            var len = 1 / this.length();
            this._x *= len;
            this._y *= len;
        };
        return Vector;
    }());
    Geometry.Vector = Vector;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log('x:' + vectorAsArray[0] + 'y:' + vectorAsArray[1]);
});
//# sourceMappingURL=Mix01.js.map