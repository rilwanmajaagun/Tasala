"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var CategoryRoutes = /** @class */ (function (_super) {
    __extends(CategoryRoutes, _super);
    function CategoryRoutes(app) {
        return _super.call(this, app, "UsersRoutes") || this;
    }
    CategoryRoutes.prototype.configureRoutes = function () {
        this.app
            .route("/category")
            .get(function (req, res) {
            res.status(200).json({ message: 'hello' });
        });
        return this.app;
    };
    return CategoryRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.CategoryRoutes = CategoryRoutes;
