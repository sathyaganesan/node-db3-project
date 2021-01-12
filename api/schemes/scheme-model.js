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

// function add(scheme) {
//     return db('schemes').insert(scheme)
//         .then((id) => {
//             return db('schemes').where('id', id)
//         })
// }

function add(scheme) {
    return db("schemes")
        .insert(scheme)
        .into("schemes")
}

function addStep(step, scheme_id) {
    return db("steps")
        .insert(step)
        .into("steps")
    .where("schemes.id", scheme_id)
}

function update(change, scheme_id) {
    return db("schemes")
        .where("id", scheme_id)
        .update(change)
}

function remove(id) {
    return db("schemes")
        .where("id", id)
        .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}