import express from 'express';
import validate from 'express-validation';

import * as categoryValidator from '../validators/categoryValidator';

import * as categoryController from '../controllers/categoryController';
import * as dishController from '../controllers/dishController';

const router = express.Router();

//TODO on authorize
/*router.use(jwt({
    secret: config.jwt.secret,
    getToken: req => req.header('Authorization'),
}));*/

router.post('/create', validate(categoryValidator.categoryCreating), categoryController.createCategory);

router.put('/:id/update', validate(categoryValidator.categoryUpdating), categoryController.updateCategory);

router.delete('/:id/delete', validate(categoryValidator.categoryDeleting), categoryController.deleteCategory);

router.get('/:id', categoryController.getCategory);

router.get('/:categoryId/dishes', validate(categoryValidator.dishesGettingByCategoryId), dishController.getDishesByCategoryId);

export default router;