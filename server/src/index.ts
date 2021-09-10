import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

app.use(helmet());
app.use(cors({ origin: 'http://localhost:3000' }));

const port = process.env.PORT || 5000;

app.listen(port);
