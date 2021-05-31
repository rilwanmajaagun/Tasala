import chai from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";

import app from "../../src/index";

const { expect } = chai;
chai.use(chaiHttp);

describe("Index Test", () => {
  it("should get category", (done) => {
    chai
      .request(app)
      .get("/api/v1/category")
      .end((err, res) => {
        console.log(res.body);
        // expect(res.body).to.have.property('message');
        // expect(res.body).to.have.property('status');
        // expect(res.body.message).to.equal('Please provide a token');
        // expect(res.body.status).to.equal('error');
        done();
      });
  });
});
