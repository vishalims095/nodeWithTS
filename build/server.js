"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var pokeApi_constants_1 = require("./constants/pokeApi.constants");
app_1.default.listen(pokeApi_constants_1.PORT, function () { return console.log("Listening on port " + pokeApi_constants_1.PORT); });
//# sourceMappingURL=server.js.map