import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('products', table => {
        table.increments('id').primary();
        table.string('description').notNullable().unique();
        table.integer('category_id').notNullable().references('id').inTable('categories');
        table.integer('quantity').notNullable();
        table.timestamp('enter_at').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('products');
}