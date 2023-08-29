const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();
chai.use(chaiHttp);


before(function(done) {
    this.timeout(20000);
    const client = require('../dbConnection');
    client.connect(err => {
        if (err) done(err);
        else done();
    });
});


describe('/GET dog', () => {
    it('it should GET all the dog', (done) => {
        chai.request("http://localhost:3000")
            .get('/api/dog')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.data.should.be.a('array');
                done();
            });
    });
});

describe('/POST dog', () => {
    it('it should POST a new dog', (done) => {
        let dog = {
            title: "Test Dog",
            subTitle: "Sub Test Dog",
            path: "dog1.jpg",
            description: "This is a test dog"
        };

        chai.request(server)
            .post('/api/dog')
            .send(dog)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});

describe('/DELETE/:id dog', () => {
    it('it should DELETE a dog given the id', (done) => {
        let id = "64e48d77c9905dde140d9eb8"; 

        chai.request(server)
            .delete('/api/dog/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('success');
                done();
            });
    });
});