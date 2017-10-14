"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./../tsclass/user");
var UserData = /** @class */ (function () {
    function UserData() {
        //properties
        this.table = '';
    }
    //methods
    UserData.prototype.insert = function (object) {
        console.log('run boy, run...');
        object.speed(15);
        return true;
    };
    UserData.prototype.update = function (object) {
        return true;
    };
    UserData.prototype.delete = function (id) {
        return null;
    };
    UserData.prototype.find = function (id) {
        return null;
    };
    UserData.prototype.findAll = function () {
        return [new user_1.User('João')];
    };
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=user.data.js.map