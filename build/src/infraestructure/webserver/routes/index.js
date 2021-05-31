"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var usersRouter_1 = __importDefault(require("./usersRouter"));
var router = express_1.default.Router();
router.use('/user', usersRouter_1.default);
module.exports = router;
