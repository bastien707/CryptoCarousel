/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.table("cc_exchange", t => {
		t.renameColumn('name', 'exName')
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  	return knex.schema.table("cc_exchange", t => {
		t.renameColumn('exName', 'name')
	})
};
