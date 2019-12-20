//////////////////////////////////////
//模組與類別和函數和列舉型別合併
//////////////////////////////////////
//class與module合併
class Album {
}
(function (Album) {
    class AlbumLabel {
    }
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
//function與module
function buildLabel(name) {
    return buildLabel.prefix + name + buildLabel.suffix;
}
(function (buildLabel) {
    buildLabel.suffix = "";
    buildLabel.prefix = "Hello, ";
})(buildLabel || (buildLabel = {}));
console.log(buildLabel("Sam Smith"));
//enum and module
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["green"] = 2] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
(function (Color) {
    function mixColor(colorName) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
    Color.mixColor = mixColor;
})(Color || (Color = {}));
//並不是所有的合併都被允許。
//現在，類別不能與類別合併，變數與型別不能合併，介面與類別不能合併。
//想要模仿類別的合併，請參考 Mixin in TypeScript。
//# sourceMappingURL=merge-mix.js.map