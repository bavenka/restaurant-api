import express from 'express';
import validate from 'express-validation';

import userValidator from '../validators/userValidator';

import * as cartController from '../controllers/cartController';

const router = express.Router();

router.post('/:userId/shoppingCart/add/dishes/:dishId', cartController.addDishToCart);

router.delete('/:userId/shoppingCart/delete/dishes/:dishId', cartController.deleteDishFromCart);

router.delete('/:userId/shoppingCart/clear', cartController.clearCart);

router.get('/:userId/shoppingCart', cartController.getDishesFromCart);

export default router;
