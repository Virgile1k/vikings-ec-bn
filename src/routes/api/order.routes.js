import express from 'express';
import { OrderController } from '../../controllers/order.controller';
import { protectRoute, restrictTo } from '../../middlewares/auth.middleware';
import { checkIfOrderExists } from '../../middlewares/order.middleware';
import { uuidValidation } from '../../validations/user/userId.validation';

const orderRoutes = express.Router();
orderRoutes
	.route('/')
	.get(
		protectRoute,
		restrictTo('buyer', 'admin'),
		OrderController.getAllOrders
	);

orderRoutes
	.route('/:orderId')
	.get(
		protectRoute,
		restrictTo('buyer', 'admin'),
		uuidValidation('orderId'),
		checkIfOrderExists,
		OrderController.getOrder
	);
export default orderRoutes;
