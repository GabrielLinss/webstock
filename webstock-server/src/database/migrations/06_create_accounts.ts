import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('accounts', table => {
        table.increments('id').primary();
        table.integer('costumer_id').notNullable().references('id').inTable('costumers');
        table.float('balance').notNullable().defaultTo(0)
        table.float('debt').notNullable().defaultTo(0)
        table.timestamp('created_at').notNullable()
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('accounts');
}