import { ErrorRequestHandler } from 'express';

export default class HTTPException extends Error {
  static handler: ErrorRequestHandler = (err, _req, res, _next) => {
    const { message, status } = err;
    return res.status(status).json({ message });
  };
}