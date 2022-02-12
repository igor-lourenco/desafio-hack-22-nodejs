const db = require("../configurations/database");

const repository = {}

repository.findAll = () => {
    return new Promise((resolve,reject) => {
        db.find({}, (err, cards) =>{
            err? reject(err) : resolve(cards);
        });
    });
};

repository.findById = (id) => {
    return new Promise((resolve, reject) => {
        db.findOne({ _id: id },  (err, card)  => {  
            err ? reject(err) : resolve(card);
        });
    });
};

module.exports = repository;