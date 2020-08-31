import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('costumers', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('cpf').unique();
        table.string('cnpj').unique();
        table.timestamp('created_at').notNullable()
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('costumers');
}