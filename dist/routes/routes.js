"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userCtrl_1 = require("../controllers/userCtrl");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/users', userCtrl_1.getUsers);
exports.default = router;
//# sourceMappingURL=routes.js.map