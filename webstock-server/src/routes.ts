import { Router } from 'express';
import ProductController from './controllers/ProductController';
import CategoryController from './controllers/CategoryController';
import CostumerController from './controllers/CostumerController';
import { celebrate, Joi } from 'celebrate';
import AuthController from './controllers/AuthController';
import AuthMiddleware from './middlewares/Auth';
import UserController from './controllers/UserController'
import AccountController from './controllers/AccountController'

const routes = Router();

const productController = new ProductController();
const categoryController = new CategoryController();
const authController = new AuthController();
const authMiddleware = new AuthMiddleware();
const costumerController = new CostumerController();
const userController = new UserController()
const accountController = new AccountController()

routes.post('/login', authController.login);

routes.get('/categories', authMiddleware.interceptRequest, categoryController.index);

routes
    .post('/categories',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                name: Joi.string().required()
            })
        }),
        categoryController.store);

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

routes.get('/users', authMiddleware.interceptRequest, userController.index);

routes.get('/users/:token', userController.show);

routes
    .post('/users',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required(),
                password: Joi.string().required()
            })
        }),
        userController.store);

routes
    .put('/users/:id',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required()
            })
        }),
        userController.update);

routes.get('/accounts', authMiddleware.interceptRequest, accountController.index);

routes
    .post('/accounts',
        authMiddleware.interceptRequest,
        celebrate({
            body: Joi.object().keys({
                costumer_id: Joi.number().required(),
                balance: Joi.number().required(),
                debt: Joi.number().required(),
                created_at: Joi.date().required()
            })
        }),
        accountController.store);

export default routes;