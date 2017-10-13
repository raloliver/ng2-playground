"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var sprinter_1 = require("./sprinter");
//properties
var user = new user_1.User('Israel');
var sprinter = new sprinter_1.Sprinter('Bolt');
//call method
user.speed(13);
//call method overwrite
sprinter.speed(27);
//# sourceMappingURL=run.js.map