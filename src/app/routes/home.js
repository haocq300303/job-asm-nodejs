const express = require("express");
const HomeController = require("../controllers/HomeController");
const routerHome = express.Router();

routerHome.get("/", HomeController.getAll);
routerHome.get("/shop", HomeController.renderShop);
routerHome.get("/features", HomeController.renderFeatures);
routerHome.get("/blog", HomeController.renderBlog);
routerHome.get("/about", HomeController.renderAbout);
routerHome.get("/contact", HomeController.renderContact);

module.exports = routerHome;
