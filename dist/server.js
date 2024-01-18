"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
// Configs
const configs_1 = __importDefault(require("./configs"));
// Routes
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use('/public', express_1.default.static(process.cwd() + '/public'));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, routes_1.default)(app, configs_1.default);
const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
    console.log(`Server listening at PORT ${PORT}`);
});
