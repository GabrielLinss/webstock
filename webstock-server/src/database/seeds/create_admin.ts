import Knex from 'knex';
import bcrypt from 'bcryptjs';

function generateHashPassword(password: string) {
    const hash = bcrypt.hashSync(password, 10);

    return hash;
}

export async function seed(knex: Knex) {
    await knex('users').insert({ name: 'Admin', email: 'admin@webstock.com', password: generateHashPassword('Admin!@#') });
}