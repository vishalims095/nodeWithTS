"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
//importing our controller
var main_controller_1 = require("./main.controller");
var bodyParser = require("body-parser");
var cors = require("cors");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.app = express();
        this.setConfig();
        //Creating and assigning a new instance of our controller
        this.pokeController = new main_controller_1.Controller(this.app);
    }
    App.prototype.setConfig = function () {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
    };
    return App;
}());
exports.default = new App().app;
//# sourceMappingURL=app.js.map