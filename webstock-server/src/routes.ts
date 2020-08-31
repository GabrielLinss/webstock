import { Router } from 'express';
import ProductController from './controllers/ProductController';
import CategoryController from './controllers/CategoryController';
import CostumerController from './controllers/CostumerController';
import { celebrate, Joi } from 'celebrate';
import AuthController from './controllers/AuthController';
import AuthMiddleware from './middlewares/Auth';

const routes = Router();

const productController = new ProductController();
const categoryController = new CategoryController();
const authController = new AuthController();
const authMiddleware = new AuthMiddleware();
const costumerController = new CostumerController();

routes.post('/login', authController.login);

routes.get('/categories', authMiddleware.interceptRequest, categoryController.index);

routes.get('/products', authMiddleware.interceptRequest, productController.index);

routes
    .post('/products',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                description: Joi.string().required(),
                category_id: Joi.number().required(),
                quantity: Joi.number().required(),
                enter_at: Joi.date().required()
            })
        }),
        productController.store);

routes.get('/costumers', authMiddleware.interceptRequest, costumerController.index);

routes
    .post('/costumers',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                name: Joi.string().required(),
                cpf: Joi.string(),
                cnpj: Joi.string(),
                created_at: Joi.date().required()
            })
        }),
        costumerController.store);

export default routes;