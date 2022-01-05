import express from "express";

const routes = express.Router();

routes.get("/", function (req, res) {
	res.render("home");
});

// routes.get("/shop-list", function (req, res) {
// 	res.render("shops");
// });

export default routes;
