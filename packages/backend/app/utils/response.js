"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = require("../constants/message");
var status_1 = require("../constants/status");
var logger_1 = require("../logger");
var Response = /** @class */ (function () {
    function Response() {
    }
    Response.UnknownError = function (error, msg) {
        logger_1.default.error(error);
        return msg || message_1.default['UNKNOWN_ERR'];
    };
    Response.Success = function (_a) {
        var _b = _a === void 0 ? {} : _a, data = _b.data, msg = _b.msg;
        return {
            code: status_1.ResponseCode.OK,
            msg: msg || message_1.default['SUCCESS'],
            data: data
        };
    };
    Response.Forbidden = function (msg) {
        return msg || message_1.default['FORBIDDEN'];
    };
    Response.InValidId = function (msg) {
        return msg || message_1.default['INVALID_ID'];
    };
    Response.InValidChapter = function (msg) {
        // return {
        //   code: ResponseCode.Bad_Request,
        //   msg: msg || message['INVALID_CHAPTER']
        // }
        return msg || message_1.default['INVALID_CHAPTER'];
    };
    Response.NoComic = function (msg) {
        // return {
        //   code: ResponseCode.Bad_Request,
        //   msg: msg || message['NO_COMIC']
        // }
        return msg || message_1.default['NO_COMIC'];
    };
    Response.NoUser = function (msg) {
        // return {
        //   code: ResponseCode.Unauthorized,
        //   msg: msg || message['NO_USER']
        // }
        return msg || message_1.default['NO_USER'];
    };
    Response.NoToken = function (msg) {
        // return {
        //   code: ResponseCode.Unauthorized,
        //   msg: msg || message['NO_TOKEN']
        // }
        return msg || message_1.default['NO_TOKEN'];
    };
    Response.InvalidCredentials = function (msg) {
        // return {
        //   code: ResponseCode.Unauthorized,
        //   msg: msg || message['INVALID_CREDENTIALS']
        // }
        return msg || message_1.default['INVALID_CREDENTIALS'];
    };
    Response.InvalidToken = function (msg) {
        // return {
        //   code: ResponseCode.Unauthorized,
        //   msg: msg || message['INVALID_TOKEN']
        // }
        return msg || message_1.default['INVALID_TOKEN'];
    };
    Response.UserAlreadyExists = function (msg) {
        // return {
        //   code: ResponseCode.Conflict,
        //   msg: msg || message['USER_ALREADY_EXISTS']
        // }
        return msg || message_1.default['USER_ALREADY_EXISTS'];
    };
    return Response;
}());
exports.default = Response;
