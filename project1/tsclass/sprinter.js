"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var Sprinter = /** @class */ (function (_super) {
    __extends(Sprinter, _super);
    function Sprinter(name) {
        return _super.call(this, name) || this;
    }
    //overwrite method
    Sprinter.prototype.speed = function (velocity) {
        console.log("'I am the fast one...'");
        _super.prototype.speed.call(this, velocity);
    };
    return Sprinter;
}(user_1.User));
exports.Sprinter = Sprinter;
//# sourceMappingURL=sprinter.js.map