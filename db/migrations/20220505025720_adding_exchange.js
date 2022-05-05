/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable("cc_exchange", t => {
		t.string("id").primary()
		t.string("name").notNull()
		t.integer("rank").notNull()
		t.string("percentTotalVol").notNull()
		t.string("volumeUsd").notNull()
		t.string("tradingPair").notNull()
		t.boolean("socket").notNull()
		t.string("exchangeURL").notNull()
		t.string("updated").notNull()
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  	return knex.schema.dropTable("cc_exchange")
};
