import { ErrorFormatter } from 'express-validator';

const errorFormatter: ErrorFormatter = ({ param, msg }) => ({
  message: msg,
  param,
});

export default errorFormatter;
