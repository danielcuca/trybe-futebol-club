import { app } from '../app';
import * as chai from 'chai';
import * as sinon from 'sinon';
import * as Bcrypt from 'bcryptjs';
// @ts-ignore
import chaiHttp = require('chai-http');
// import TeamService from '../services/team.service';
import User from '../database/models/user.model';
import userMock from './Mocks/userMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('testes na rota teams', () => {
    afterEach(() => {
      sinon.restore();
    });
    it('Testa /login', async function () {
      sinon.stub(User, 'findOne').resolves(User.build(userMock.userModel));
      sinon.stub(Bcrypt, 'compare').resolves(true);

      const res = await chai.request(app).post('/login').send(userMock.validUser);
      
      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body).to.have.property('token');
    });

    it('testa middleware de login', async function () {
      const res = await chai.request(app).post('/login').send(userMock.userWithoutEmail);
      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body).to.deep.equal(userMock.loginError);
    });
});
