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

repository.create = (card) => {
    return new Promise((resolve, reject) =>{
        db.insert(card, (err, newCard) =>{
            err ? reject(err) : resolve(newCard);
        });
    });
};

repository.update = (id, card) =>{
    return new Promise((resolve, reject) => {
        db.update({_id : id}, {...card} , (err, card) =>{
            err ? reject(err) : resolve(card);
        });
    });
};

repository.delete = (id) => {
    return new Promise((resolve, reject) =>{
        db.remove({_id: id}, {}, (err, cardRemoved) =>{
            err ? reject(err) : resolve(cardRemoved);
        });
    });
};

repository.paginationAndSorting = (sorts, skip, limit) => {
    
    return new Promise((resolve, reject) => {
        db.find({}).sort(sorts).limit(new Number(limit)).skip(new Number(skip)).exec(function (err, cards) {
            console.log(cards)
            err ? reject(err) : resolve(cards);
          });
    });
};


module.exports = repository;