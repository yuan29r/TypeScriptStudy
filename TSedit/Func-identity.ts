function identity0(arg:number):number{
    return arg;
}

function identity1(arg: any): any {
    return arg;
}

//泛型
function identity2<T>(arg: T): T {
    return arg;
}

// type of output will be 'string'
var output = identity2<string>("myString");
//這個型別都省略，採型別推論
var output = identity2("myString");


/** 
 * //這樣寫會出現錯誤,沒有length
function loggingIdentity<T>(arg: T): T {
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}
*/

//把型別改成陣列，就有length
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}


/**下面寫法應該有點概念了
 * :右邊都是型別宣告，因為我們要等於一個範行函數，所以把飯型那邊型別拿來宣告
 * =>右邊回傳型別
 * 然後等於範型函數
 * 這是依序解釋，概念大概是如此
 * */
function identity3<T>(arg: T): T {
    return arg;
}
//一般板
var myIdentity: <T>(arg: T)=>T = identity3;
//沒有說一定要用T這個字眼喔，像這裡用U也可以喔
var myIdentity2: <U>(arg: U)=>U = identity3;
//object literal type 不知道如何翻譯成中文~哈哈
var myIdentity3: {<T>(arg: T): T} = identity3;


/**下面示泛型介面 */
function identity5<T>(arg:T):T{
    return arg;
}
//有以上概念後，就可以寫範型介面了
interface GenericIdentityFn{
    <T>(arg:T):T;    
}
var myIdentity4:GenericIdentityFn=identity5;

//把泛型參數當作整個介面的一個參數,方便在使用時就可以知道具體的行別
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
var myIdentity5: GenericIdentityFn2<number> = identity5;

/**下面是泛型類別 
 * 與介面一樣，直接把泛型型別放在類別後面，
 * 可以幫助我們確認類別的所有屬性都在使用相同的型別。
*/
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
//數字
var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
//字串
var stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function(x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

/**泛型約束 */
interface Lengthwise{
    length:number;
}
//定義一個介面來描述約束條件。
//建立一個包含‘length’屬性的介面，使用這個介面和extends關鍵字來實現約束。
function loggingIdentity3<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//loggingIdentity3(2);//這樣寫就會出錯
loggingIdentity3({length:10,value:3});//這樣寫就對了


/**在泛型約束中使用型別參數 */
/*function find<T, U extends Findable<T>>(n: T, s: U) {  
    // errors because type parameter used in contraint
    // ... 
  }
  find(giraffe, myAnimals);*/
 
 /* 
 function find<T>(n: T, s: Findable<T>) {
    // ...
  }
  find(giraffe, myAnimals);
  */

  /**在泛型裡使用類別型別  T是個class 要使用他在()裡面{new():T;}*/
  function create<T>(c: {new(): T;}): T {
    return new c();
}
/**更進階寫法 */
class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string; 
}

class Animal0 {
    numLegs: number;
}

class Bee extends Animal0 {
    keeper: BeeKeeper;
}

class Lion extends Animal0 {
    keeper: ZooKeeper;
}
/**A繼承了Animal0
 * K是我們要回傳的型別
 * ()裡 a的型別是個function 裡面做了class的執行個體和定義一個擴展物件prototype
 */
function findKeeper<A extends Animal0, K> (a: {new(): A; prototype: {keeper: K}}
    ): K {

    return a.prototype.keeper;
}

findKeeper(Lion).nametag;  // typechecks!