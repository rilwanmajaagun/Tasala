"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = __importDefault(require("chai"));
var chai_http_1 = __importDefault(require("chai-http"));
var mocha_1 = require("mocha");
var index_1 = __importDefault(require("../../src/index"));
var expect = chai_1.default.expect;
chai_1.default.use(chai_http_1.default);
mocha_1.describe("Index Test", function () {
    it('should always pass', function (done) {
        chai_1.default.request(index_1.default)
            .get('/')
            .end(function (err, res) {
            // console.log(res.body);
            done();
        });
    });
    it('should get category', function (done) {
        chai_1.default.request(index_1.default)
            .get('/category')
            .end(function (err, res) {
            console.log(res.body);
            // expect(res.body).to.have.property('message');
            // expect(res.body).to.have.property('status');
            // expect(res.body.message).to.equal('Please provide a token');
            // expect(res.body.status).to.equal('error');
            done();
        });
    });
});
