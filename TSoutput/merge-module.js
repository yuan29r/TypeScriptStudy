var Animals;
(function (Animals) {
    class Zebra {
    }
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function (Animals) {
    class Dog {
    }
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
//等同於
/*
module Animals {
    export interface Legged { numberOfLegs: number; }
    
    export class Zebra { }
    export class Dog { }
}
*/
//除了這些合併外，你還需要瞭解非匯出成員是如何處理的。
//非匯出成員僅在其原始存在於的模組（未合併的）之內可見。
//這就是說合併之後，從其它模組合併進來的成員無法訪問非匯出成員了。
//下例提供了更清晰的說明：
var Animal01;
(function (Animal01) {
    var haveMuscles = true;
    function animalsHaveMuscles() {
        return haveMuscles;
    }
    Animal01.animalsHaveMuscles = animalsHaveMuscles;
})(Animal01 || (Animal01 = {}));
//
//module Animal01 {
//   export function doAnimalsHaveMuscles() {
//        return haveMuscles;  // <-- error, haveMuscles is not visible here
//    }
//}
//haveMuscles會出現錯誤，因為他沒有export
//# sourceMappingURL=merge-module.js.map