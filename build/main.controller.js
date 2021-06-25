"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var pokemon_service_1 = require("./services/pokemon.service");
var Controller = /** @class */ (function () {
    function Controller(app) {
        this.app = app;
        this.pokeService = new pokemon_service_1.PokeService();
        this.routes();
    }
    Controller.prototype.routes = function () {
        this.app.route('/getReport').get(this.pokeService.getReport);
        this.app.route('/getFeedBack').get(this.pokeService.getFeedBack);
    };
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=main.controller.js.map