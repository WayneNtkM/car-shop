import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).updateCar(),
);

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).registerNewCar(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).findCarById(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).findAllCars(),
);

export default routes;
