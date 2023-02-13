import { Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private service;
  private req: Request;
  private res: Response;

  constructor(req: Request, res: Response) {
    this.service = new CarService();
    this.req = req;
    this.res = res;
  }

  public async registerNewCar() {
    const newCar = this.req.body;
    const data = await this.service.registerCar(newCar);
    return this.res.status(201).json(data);
  }
}