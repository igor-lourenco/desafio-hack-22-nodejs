const Card = require("../models/card-model");
const repository = require("../repositories/card-repository");
const service = {}

service.findAll = async() => {
    return await repository.findAll();
}

service.findById = async(id) => {
    return await repository.findById(id);
}

module.exports = service;