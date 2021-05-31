"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = require("./config/db");
var routes_1 = require("./routes");
var debug_1 = __importDefault(require("debug"));
var express_2 = __importDefault(require("./config/express"));
var app = express_1.default();
var debugLog = debug_1.default('app');
// Just checking if given PORT variable is an integer or not
var port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
    port = 3000;
}
express_2.default(app);
db_1.TryDBConnect().then(function (result) {
    if (result) {
        app.listen(port, "0.0.0.0", function () {
            routes_1.routes.forEach(function (route) {
                debugLog("Routes configured for " + route.getName());
            });
            console.log("\uD83D\uDE80 Server Started at PORT: " + port);
        });
    }
}).catch(function (error) {
    console.log(error);
});
exports.default = app;
