// Disposable Mixin
class Disposable {
    dispose() {
        this.isDisposed = true;
    }
}
// Activatable Mixin
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
/*
 *首先應該注意到的是，
 * 沒使用‘extends’而是使用‘implements’。把類當成了介面，
 * 僅使用Disposable和Activatable的型別而非其實現。
 * 這意味著我們需要在類裡面實現介面。但是這是我們在用mixin時想避免的。
 * 為將要mixin進來的屬性方法建立出替代屬性(stand-in properties)。
 * 告訴編譯器這些成員在運行時是可用的。
 * 這樣就能使用mixin帶來的便利，雖說需要提前定義一些替代屬性。
 */
class SmartObject {
    constructor() {
        // Disposable
        this.isDisposed = false;
        // Activatable
        this.isActive = false;
        setInterval(() => console.log(this.isActive + " : " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }
}
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
////////////////////////////////////////
// In your runtime library somewhere
//最後，建立這個説明函數，幫我們做混入操作。
//它會遍歷mixins上的所有屬性，並複製到目標上去，
//把之前的替代屬性替換成真正的實現程式碼。
////////////////////////////////////////
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
/**對於沒時常開發前端的人員來說這用法算是少見的
 * 我還沒有看過這種寫法出現的說
 * 可能沒有遇到達人級別
 *
 */ 
//# sourceMappingURL=Mixins.js.map