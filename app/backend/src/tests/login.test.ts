import { app } from '../app';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as Bcrypt from 'bcryptjs';
// @ts-ignore
import chaiHttp = require('chai-http');
// import TeamService from '../services/team.service';
import User from '../database/models/user.model';
import userMock from './Mocks/userMock';
import Token from '../utils/token';

chai.use(chaiHttp);
const { expect } = chai;

describe('testes na rota /login', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa /login com senha certa', async function () {
      sinon.stub(User, 'findOne').resolves(User.build(userMock.userModel));
      sinon.stub(Bcrypt, 'compare').resolves(true);

      const res = await chai.request(app).post('/login').send(userMock.validUser);
      
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('token');
    });

    it('Testa /login com senha errada', async function () {
      sinon.stub(User, 'findOne').resolves(User.build(userMock.userModel));
      sinon.stub(Bcrypt, 'compare').resolves(false);

      const res = await chai.request(app).post('/login').send(userMock.invalidUserPassword);
      
      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.be.deep.equal(userMock.loginError2);
    });

    it('testa middleware de login', async function () {
      const res = await chai.request(app).post('/login').send(userMock.userWithoutEmail);
      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock.loginError);
    });

    it('testa middleware de login user invalido', async function () {
      const res = await chai.request(app).post('/login').send(userMock.invalidUser);
      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock.loginError2);
    });

    it('testa middleware de login com senha com menos de 6 digitos', async function () {
      const res = await chai.request(app).post('/login').send(userMock.invalidUserWhitPasswordLength);
      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock.loginError2);
    });

    it('testa middleware de login com email invalido', async function () {
      const res = await chai.request(app).post('/login').send(userMock.invalidEmail);
      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock.loginError2);
    });

    it('testa role do login com token valido', async function () {
      const validToken = Token.generateToken(userMock.payload);
      const res = await chai.request(app).get('/login/role').set('authorization', `Bearer ${validToken}`);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal({ role: 'admin' });
    });

    it('testa role do login com token invalido', async function () {
      const validToken = Token.generateToken(userMock.payload);
      const res = await chai.request(app).get('/login/role').set('authorization', validToken);

      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal({ message: 'Token must be a valid token' });
    });

    it('testa role do login sem token', async function () {
      const res = await chai.request(app).get('/login/role');

      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal({ message: 'Token not found' });
    });
});
