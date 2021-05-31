"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
        this.id = 0;
        this.email = null;
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.photo = "";
        this.phone = "";
        this.about = "";
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column('varchar', { length: 500, nullable: true }),
        __metadata("design:type", Object)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column('varchar', { length: 1000, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column('varchar', { length: 50 }),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column('varchar', { length: 50 }),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column('varchar', { length: 15000, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "photo", void 0);
    __decorate([
        typeorm_1.Column('varchar', { length: 100, nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "phone", void 0);
    __decorate([
        typeorm_1.Column('text', { nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "about", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamptz", default: "now()" }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({ type: "timestamptz" }),
        __metadata("design:type", Date)
    ], User.prototype, "updatedAt", void 0);
    User = __decorate([
        typeorm_1.Entity({ name: 'user' })
    ], User);
    return User;
}());
exports.User = User;
