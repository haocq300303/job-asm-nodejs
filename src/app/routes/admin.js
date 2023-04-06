const express = require("express");
const ProductController = require("../controllers/ProductController");
const routerAdmin = express.Router();

routerAdmin.get("/", ProductController.getAll);
routerAdmin.get("/add", ProductController.renderAdd);
routerAdmin.get("/products/:id", ProductController.getDetail);
routerAdmin.post("/", ProductController.create);
routerAdmin.put("/products/:id", ProductController.update);
routerAdmin.delete("/products/:id", ProductController.delete);

module.exports = routerAdmin;
