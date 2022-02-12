const db = require("../configurations/database");

const repository = {}

repository.findAll = () => {
    return new Promise((resolve,reject) => {
        db.find({}, (err, cards) =>{
            err? reject(err) : resolve(cards);
        });
    });
};

module.exports = repository;