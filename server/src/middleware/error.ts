import { ErrorRequestHandler } from 'express';

const error: ErrorRequestHandler = (error, _req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({ errors: [{ message: error.message }] });
};

export default error;
