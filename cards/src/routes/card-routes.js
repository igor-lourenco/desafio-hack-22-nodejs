const controller = require("../controllers/card-controller");

module.exports = (app) => {

    app.route("/cards/paginationAndSorting").get(controller.paginationAndSorting);
    
    app.route("/cards").get(controller.findAll);

    app.route("/cards/:id").get(controller.findById);

    app.route("/cards").post(controller.create);

    app.route("/cards/:id").put(controller.update);

    app.route("/cards/:id").delete(controller.delete);

}