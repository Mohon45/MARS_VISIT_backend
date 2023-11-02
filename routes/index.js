var express = require("express");
var router = express.Router();
const applicationRoutes = require("./application.route");

let rootRouter = router;

rootRouter.use("/application", applicationRoutes);

module.exports = rootRouter;
