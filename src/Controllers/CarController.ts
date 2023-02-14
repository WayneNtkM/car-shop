import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ErrorFactory from '../utils/ErrorFactory';

export default class CarController {
  private service;
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.service = new CarService();
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public async registerNewCar() {
    const newCar = this.req.body;
    try {
      const data = await this.service.registerCar(newCar);
      return this.res.status(201).json(data);
    } catch (error) {
      this.next(error);
    }
  }

  public async findAllCars() {
    try {
      const car = await this.service.findAllCars();
      return this.res.status(200).json(car);
    } catch (error) {
      throw new ErrorFactory(500, 'Internal server error');
    }
  }

  public async findCarById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findById(id);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCar() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const car = await this.service.updateCar(id, body);
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}