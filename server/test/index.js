const config = require('../config');

const { Test } = require('../models/reports');


// Require dependencies
const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');

const should  = chai.should();

chai.use(chaiHttp);

// Our main block
describe('Test', () => {
    beforeEach((done) => {
        Test.remove({}, (err) => {
            done();
        });
    });
});

// Testing the get request
describe('/GET Reports withing 10km of distance', () => {
    it('it should return reports data', (done) => {
        chai.request(app)
        .get('/reports/123/124')
        .end((err, res) => {
            res.body.should.be.a('object');
            res.should.have.status(200);
            res.body.should.have.property('message');
            res.body.should.have.property('message').eql("reports succesfully fetched");
            done();
        })
    });
});
