"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IndexController = /** @class */ (function () {
    function IndexController() {
    }
    IndexController.prototype.index = function (ctx) {
        ctx.body = 'Hello World';
    };
    return IndexController;
}());
exports.default = new IndexController();
