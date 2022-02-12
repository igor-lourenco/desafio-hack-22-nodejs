const service = require("../services/card-service");
const controller = {}

controller.findAll = async (req, res) => {
    const cards = await service.findAll();
    return res.status(200).json(cards);
};

controller.findById = async(req, res) => {
    const id = req.params.id;
    const card = await service.findById(id);

    if(!card){
        return res.status(404).json({message: "Id não existe"});
    }
    return res.status(200).json(card);
};

controller.create = async(req, res) =>{
    const card = await service.create(req.body);
    return res.status(201).json(card);
};

controller.update = async (req, res) => {
    const id = req.params.id;
    const cardUpdate = req.body;
    const card = await service.findById(req.params.id);

    if(!card){
        return res.status(404).json({message : "Id não existe"});
    }
    await service.update(id, cardUpdate);
    return res.status(200).json(cardUpdate);
};

module.exports = controller;