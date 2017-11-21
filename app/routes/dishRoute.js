import express from 'express';
import validate from 'express-validation';

import * as dishValidator from '../validators/dishValidator';

import * as dishController from '../controllers/dishController';

const router = express.Router();

router.post('/create', validate(dishValidator.dishCreating), dishController.createDish);

router.put('/:id/update', validate(dishValidator.dishUpdating), dishController.updateDish);

router.delete('/:id/delete', validate(dishValidator.dishDeleting), dishController.deleteDish);

router.get('/:id', validate(dishValidator.dishGetting), dishController.getDish);

export default router;
