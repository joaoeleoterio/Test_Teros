"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Companies_Controller_1 = __importDefault(require("../Controllers/Companies.Controller"));
const router = (0, express_1.Router)();
router.get('/companies', Companies_Controller_1.default.insertCompanies);
exports.default = router;
