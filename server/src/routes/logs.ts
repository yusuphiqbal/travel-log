import { Router } from 'express';

import * as controller from '../controllers/logs';
import * as validators from '../validators/logs';

const router = Router();

router.get('/', controller.getLogs);

router.post('/', validators.create(), controller.newLogEntry);

export default router;
