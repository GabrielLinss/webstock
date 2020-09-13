import knex from '../database/connection';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

function generateHashPassword(password: string) {
    const hash = bcrypt.hashSync(password, 10);

    return hash;
}

class UserController {
    async index(req: Request, res: Response) {
        const users = await knex('users').orderBy('id', 'desc').select('*');

        return res.json(users);
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
}

export default UserController;