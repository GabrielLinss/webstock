import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('categories').insert([
        { name: 'Alimentos' },
        { name: 'Limpeza' },
        { name: 'Bebidas' }
    ]);
}