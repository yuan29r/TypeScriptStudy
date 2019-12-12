class Logger {
    log(arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    }
}
var user = {
    name: "",
    password: ""
};
//# sourceMappingURL=interfacetest.js.map