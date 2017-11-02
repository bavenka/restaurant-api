import express from 'express';
import validate from 'express-validation';

import * as categoryValidator from '../validators/categoryValidator';

import * as categoryController from '../controllers/categoryController';

const router = express.Router();

//TODO on authorize
/*router.use(jwt({
    secret: config.jwt.secret,
    getToken: req => req.header('Authorization'),
}));*/

router.post('/create', validate(categoryValidator.categoryCreating), categoryController.createCategory);

router.delete('/delete', validate(categoryValidator.categoryDeleting), categoryController.deleteCategory);

export default router;