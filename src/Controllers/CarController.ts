import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

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
}