"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//ROUTES
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/test', (req, res) => {
    res.status(200).json("Server running on");
});
app.use('/api/v1', routes_1.default);
let port = 5000;
app.listen(port, () => {
    console.log('Server running on port', port);
});
//# sourceMappingURL=index.js.map