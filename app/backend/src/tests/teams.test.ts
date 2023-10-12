import { app } from '../app';
import * as chai from 'chai';
import * as sinon from 'sinon';
// @ts-ignore
import chaiHttp from 'chai-http';
// import TeamService from '../services/team.service';
import Team from '../database/models/team.model';
// import { teamsMock } from './Mocks/teamsMock';

chai.use(chaiHttp);
const { expect } = chai;

describe('testes na rota teams', () => {
    afterEach(() => {
      sinon.restore();
    });

    it('Testa /teams/:id', async function () {
        const buildStub = [
            {
                id: 1,
                teamName: 'Avaí/Kindermann',
            },
        ];
        const stub = sinon.stub(Team, 'findAll').resolves(buildStub as any);

        const res = await chai.request(app).get('/teams/1').send();

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(buildStub[0]);
        stub.restore();
    });
});
