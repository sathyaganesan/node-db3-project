// scheme-model
const db = require("../../data/db-config");

function find() {
    return db("schemes")
        .select("*"); 
}

function findById(id) {
    return db("schemes")
        .select("*")
        .where("schemes.id", id);
}

function findSteps(id) {
    return db("steps")
        .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
        .leftJoin("schemes", "steps.scheme_id", "schemes.id")
        .where("steps.id", id)
}

module.exports = {
    find,
    findById,
    findSteps,
}