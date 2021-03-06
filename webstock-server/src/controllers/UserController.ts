import knex from '../database/connection';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

function generateHashPassword(password: string) {
    const hash = bcrypt.hashSync(password, 10);

    return hash;
}

class UserController {
    async index(req: Request, res: Response) {
        const users = await knex('users').orderBy('id', 'desc').select('*');

        return res.json(users);
    }

    async show(req: Request, res: Response) {
        const { token } = req.params

        try {
            const userTokenInfo = jwt.verify(String(token), String(process.env.JWT_SECRET))

            const user = await knex('users').where('id', userTokenInfo.id).first();

            delete user.password

            return res.json(user);
        } catch (error) {
            return res.status(401).json({ message: 'Unauthorized', error })
        }
    }

    async store(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const data = {
            name,
            email,
            password: generateHashPassword(password),
            role: 'USER'
        };

        const trx = await knex.transaction();

        const users = await trx('users').insert(data);

        await trx.commit();

        delete data.password

        return res.status(201).json({ id: users[0], ...data });
    }

    async update(req: Request, res: Response) {
        const user = await knex('users').where('id', req.params.id).first();

        const { name, email } = req.body;

        const trx = await knex.transaction()

        const users = await trx('users').where('id', user.id).update({ name, email })

        await trx.commit()

        return res.json({ id: users, name, email })
    }
}

export default UserController;