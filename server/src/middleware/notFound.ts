import { RequestHandler } from 'express';

const notFound: RequestHandler = (req, res, next) => {
  const error = new Error(`The endpoint '${req.originalUrl}' was not found`);
  res.status(404);
  next(error);
};

export default notFound;
