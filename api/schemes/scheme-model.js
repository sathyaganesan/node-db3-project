// scheme-model
const db = require("../../data/db-config");

function find() {
    return db("schemes")
        .select("*"); 
}

function findById(id) {
    return db("schemes")
        .select("*")
        .where("schemes.id");
}
module.exports = {
    find,
    findById
}