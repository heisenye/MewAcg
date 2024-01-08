"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require("@koa/router");
var config_controller_1 = require("../controller/config.controller");
var router = new Router({ prefix: '/api' });
router.get('/config', config_controller_1.default.getConfig);
exports.default = router;
