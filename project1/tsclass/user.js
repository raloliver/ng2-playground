"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //functions
    function User(name) {
        this.name = name;
    }
    //method
    User.prototype.speed = function (velocity) {
        console.log(this.name + " alcan\u00E7ou " + velocity + "km/h");
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map