import { app } from '../app';
import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp = require('chai-http');
// import TeamService from '../services/team.service';
import Team from '../database/models/team.model';
import teamsMock from './Mocks/teamsMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('testes na rota teams', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Testa /teams', async function () {
        
        sinon.stub(Team, 'findAll').resolves(Team.bulkBuild(teamsMock.mockAllTeams));

        const res = await chai.request(app).get('/teams');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.be.deep.equal(teamsMock.mockAllTeams);
    });

    it('Testa /teams/:id', async function () {
        sinon.stub(Team, 'findByPk').resolves(Team.build(teamsMock.mockTeamById));

        const res = await chai.request(app).get('/teams/1');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.be.deep.equal(teamsMock.mockTeamById);
    });
});
