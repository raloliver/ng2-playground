"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
var user_1 = require("./../tsclass/user");
var sprinter_1 = require("./../tsclass/sprinter");
//properties
var data = new data_1.Data();
var user = new user_1.User('Antonio');
var sprinter = new sprinter_1.Sprinter('Usain Bolt');
//methods
data.insert(user);
data.insert(sprinter); //aqui funciona pq "sprinter" extends "user"
//# sourceMappingURL=run.js.map