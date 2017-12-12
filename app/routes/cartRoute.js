import express from 'express';
import validate from 'express-validation';

import * as cartValidator from '../validators/cartValidator';

import * as cartController from '../controllers/cartController';

const router = express.Router();

router.post('/:userId/shoppingCart/add/dishes/:dishId', validate(cartValidator.addingDish), cartController.addDishToCart);

router.delete('/:userId/shoppingCart/delete/dishes/:dishId',validate(cartValidator.deletingDish), cartController.deleteDishFromCart);

router.delete('/:userId/shoppingCart/clear',validate(cartValidator.clearingCart), cartController.clearCart);

router.get('/:userId/shoppingCart',validate(cartValidator.gettingDishes), cartController.getDishesFromCart);

export default router;
