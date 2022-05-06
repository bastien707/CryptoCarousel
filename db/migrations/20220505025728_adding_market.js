/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
	return knex.schema.createTable("cc_markets", t => {
		t.string("exchangeID").references("id").inTable("cc_exchange").onDelete("CASCADE")
		t.string("rank").notNull()
		t.string("baseSymbol").notNull()
		t.string("baseId").notNull()
		t.string("quoteSymbol").notNull()
		t.string("quoteId").notNull()
		t.string("priceQuote").notNull()
		t.string("priceUsd").notNull()
		t.string("volumeUsd24h").notNull()
		t.string("percentexVol").notNull()
		t.string("trades24h").nullable()
		t.string("updated")
	})
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  	return knex.schema.dropTable("cc_markets")
};
