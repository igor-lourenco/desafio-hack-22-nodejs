const controller = require("../controllers/card-controller");

module.exports = (app) => {

    app.route("/cards").get(controller.findAll);
}