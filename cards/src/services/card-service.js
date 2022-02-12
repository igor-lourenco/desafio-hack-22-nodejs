const Card = require("../models/card-model");
const repository = require("../repositories/card-repository");
const service = {}

service.findAll = async() => {
    return await repository.findAll();
}

module.exports = service;