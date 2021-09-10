import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

import notFound from './middleware/notFound';
import error from './middleware/error';

const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(notFound);
app.use(error);

const port = process.env.PORT || 5000;

app.listen(port);
