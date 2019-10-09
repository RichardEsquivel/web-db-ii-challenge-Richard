//Create connection to database using knex and knexConfig
const knex = require('knex');
const knexConfig = require('../knexfile.js');

//use development connection of knex
const vehDb = knex(knexConfig.development);


module.exports = vehDb;