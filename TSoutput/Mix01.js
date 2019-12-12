var Geometry;
(function (Geometry) {
    class Vector {
        constructor(x, y) {
            this.newProperty = 1 / this.length();
            this._x = x;
            this._y = y;
        }
        toArray(callback) {
            callback([this._x, this._y]);
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y);
        }
        normalize() {
            var len = this.newProperty;
            this._x *= len;
            this._y *= len;
        }
    }
    Geometry.Vector = Vector;
})(Geometry || (Geometry = {}));
var vector = new Geometry.Vector(2, 3);
vector.normalize();
vector.toArray(function (vectorAsArray) {
    console.log('x:' + vectorAsArray[0] + 'y:' + vectorAsArray[1]);
});
//# sourceMappingURL=Mix01.js.map