import { NextFunction, Request, Response } from 'express';
import ErrorFactory from '../utils/ErrorFactory';
import MotorcycleService from '../Services/MotorcycleService';

export default class MotorcycleController {
  private service;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new MotorcycleService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async registerNewCar() {
    const newBike = this.req.body;
    try {
      const data = await this.service.registerMotorcycle(newBike);
      return this.res.status(201).json(data);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    try {
      const motorcycle = await this.service.findAllMotorcycles();
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      throw new ErrorFactory(500, 'Internal server error');
    }
  }

  public async findCarById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.findById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const motorcycle = await this.service.updateMotorcycle(id, body);
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async deleteMotorcycle() {
    const { id } = this.req.params;
    try {
      await this.service.deleteMotorcycle(id);
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}