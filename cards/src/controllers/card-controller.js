const service = require("../services/card-service");
const controller = {}

controller.findAll = async (req, res) => {
    const cards = await service.findAll();
    return res.status(200).json(cards);
}

module.exports = controller;