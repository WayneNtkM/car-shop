import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import { afterEach } from 'mocha';
import CarService from '../../../src/Services/CarService';
import newCar, { cars, newCarResponse } from '../../integration/mocks/CarMocks';

describe('Unit test for service layer', function () {
  afterEach(sinon.restore);

  it('Should register a new Car', async function () {
    sinon.stub(Model, 'create')
      .resolves(newCarResponse);

    const service = new CarService();
    const res = await service.registerCar(newCar);

    expect(res).to.be.deep.equal(newCarResponse);
  });
  it('Should return the specific car', async function () {
    sinon.stub(Model, 'findById')
      .resolves(cars[0]);

    const id = '634852326b35b59438fbea2f';

    const service = new CarService();
    const res = await service.findById(id);

    expect(res).to.be.deep.equal(cars[0]);
  });
  it('Should return all cars', async function () {
    sinon.stub(Model, 'find')
      .resolves(cars);

    const service = new CarService();
    const res = await service.findAllCars();

    expect(res).to.be.deep.equal(cars);
  });
  it('Should throw an exception when mongo id is invalid', async function () {
    sinon.stub(Model, 'findById')
      .resolves(null);

    const wrongId = '7634852326b35b59438fbea2f';

    try {
      const service = new CarService();
      await service.findById(wrongId);
    } catch (error) {
      expect((error as unknown as Error).message).to.be.equal('Invalid mongo id');
    }
  });
  it('Should throw an exception when id is non-existent', async function () {
    sinon.stub(Model, 'findById')
      .resolves(null);

    const wrongId = '634852326b35b59438fbea2f';

    try {
      const service = new CarService();
      await service.findById(wrongId);
    } catch (error) {
      expect((error as unknown as Error).message).to.be.equal('Car not found');
    }
  });
});