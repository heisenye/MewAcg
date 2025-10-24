"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("@koa/router");
var index_controller_1 = require("../controller/index.controller");
var router = new Router();
router.get('/', index_controller_1.default.index);
exports.default = router;
