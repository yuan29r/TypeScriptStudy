//////////////////////////////////////
//模組與類別和函數和列舉型別合併
//////////////////////////////////////

//class與module合併
class Album {
    label: Album.AlbumLabel;
}
module Album {
    export class AlbumLabel { }
}

//function與module
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

module buildLabel {
    export var suffix = "";
    export var prefix = "Hello, ";
}

console.log(buildLabel("Sam Smith"));


//enum and module
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

module Color {
    export function mixColor(colorName: string) {
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
}

//並不是所有的合併都被允許。
//現在，類別不能與類別合併，變數與型別不能合併，介面與類別不能合併。
//想要模仿類別的合併，請參考 Mixin in TypeScript。