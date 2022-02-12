const Card = require("../models/card-model");
const repository = require("../repositories/card-repository");
const service = {}

service.findAll = async() => {
    return await repository.findAll();
}

service.findById = async(id) => {
    return await repository.findById(id);
}

service.create = async (card) => {
    const createCard =  new Card();
    createCard.setCardNumber(card.cardNumber);
    createCard.setEmbossName(card.embossName);
    createCard.setCustomerName(card.customerName);
    createCard.setDocumentNumber(card.documentNumber);
    createCard.setMotherName(card.motherName);
    createCard.setAddress(card.address);
    createCard.setCity(card.city);

    return await repository.create(createCard);
}

service.update = async(id, card) => {
    return await repository.update(id, card);
}

module.exports = service;