import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { afterEach } from 'mocha';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import newMotorcycle, { motorcycles,
  motorcycleResponse, updatedMotorcycle, updateMotorcycle } from '../mocks/MotorcycleMocks';

describe('Unit test for service layer', function () {
  afterEach(sinon.restore);

  it('Should register a new Motorcycle', async function () {
    sinon.stub(Model, 'create')
      .resolves(motorcycleResponse);

    const service = new MotorcycleService();
    const res = await service.registerMotorcycle(newMotorcycle);

    expect(res).to.be.deep.equal(motorcycleResponse);
  });
  it('Should return the specific Motorcycle', async function () {
    sinon.stub(Model, 'findById')
      .resolves(motorcycles[0]);

    const id = '6348513f34c397abcad040b2';

    const service = new MotorcycleService();
    const res = await service.findById(id);

    expect(res).to.be.deep.equal(motorcycles[0]);
  });
  it('Should return all Motorcycles', async function () {
    sinon.stub(Model, 'find')
      .resolves(motorcycles);

    const service = new MotorcycleService();
    const res = await service.findAllMotorcycles();

    expect(res).to.be.deep.equal(motorcycles);
  });
  it('Should throw an exception when mongo id is invalid', async function () {
    sinon.stub(Model, 'findById')
      .resolves(null);

    const wrongId = '7634852326b35b59438fbea2f';

    try {
      const service = new MotorcycleService();
      await service.findById(wrongId);
    } catch (error) {
      expect((error as unknown as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  it('Should throw an exception when id is non-existent', async function () {
    sinon.stub(Model, 'findById')
      .resolves(null);

    const wrongId = '6348513f34c397abcad040b2';

    try {
      const service = new MotorcycleService();
      await service.findById(wrongId);
    } catch (error) {
      expect((error as unknown as Error).message).to.be.equal('Motorcycle not found');
    }
  });
  it('Should update', async function () {
    sinon.stub(Model, 'updateOne')
      .resolves();
    sinon.stub(Model, 'findById').resolves(updatedMotorcycle);
    
    const id = '634852326b35b59438fbea2f';

    const service = new MotorcycleService();
    const motorcycle = await service.updateMotorcycle(id, updateMotorcycle);
    expect(motorcycle).to.be.deep.equal(updatedMotorcycle);
  });
  it('Should delete', async function () {
    sinon.stub(Model, 'deleteOne')
      .resolves();
    sinon.stub(Model, 'findById').resolves(newMotorcycle);
    
    const id = '6348513f34c397abcad040b2';

    const service = new MotorcycleService();
    await service.deleteMotorcycle(id);
  });
});