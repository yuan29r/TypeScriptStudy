var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    };
    return Logger;
}());
var user = {
    name: "",
    password: ""
};
//# sourceMappingURL=interfacetest.js.map