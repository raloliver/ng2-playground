"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_data_1 = require("./user.data");
var user_1 = require("./../tsclass/user");
//properties
var data = new user_data_1.UserData();
var user = new user_1.User('João da Silva');
//methods
data.insert(user);
//# sourceMappingURL=run.js.map