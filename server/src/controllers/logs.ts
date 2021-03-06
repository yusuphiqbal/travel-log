import { RequestHandler } from 'express';
import { validationResult } from 'express-validator';

import Log from '../models/log';
import LogType from '../interfaces/log';
import errorFormatter from '../config/errorFormatter';

export const getLogs: RequestHandler = async (_req, res, next) => {
  try {
    const logs = await Log.find();
    return res.json({ logs });
  } catch (error) {
    next(error);
  }
};

export const newLogEntry: RequestHandler = async (req, res, next) => {
  const errors = validationResult(req).formatWith(errorFormatter);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data: LogType = req.body;

  try {
    let log = new Log(data);
    log = await log.save();
    return res.status(201).json({ log });
  } catch (error) {
    next(error);
  }
};
