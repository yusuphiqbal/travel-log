import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import connectDB from './config/database';
import notFound from './middleware/notFound';
import error from './middleware/error';
import config from './config/config';
import logs from './routes/logs';

connectDB();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors({ origin: config.cors.origin }));

app.use('/api/logs', logs);

app.use(notFound);
app.use(error);

const port = process.env.PORT || 5000;

app.listen(port);
