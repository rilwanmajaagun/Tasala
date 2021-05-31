"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.routes = void 0;
var category_routes_config_1 = require("./category/category.routes.config");
var routes = [];
exports.routes = routes;
var route = function (app) {
    routes.push(new category_routes_config_1.CategoryRoutes(app));
};
exports.route = route;
