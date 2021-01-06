// db-config
const knex = require("knex");

const knexfile = require("../knexfile.js");

const production = "development";

module.exports = knex(knexfile[production]);