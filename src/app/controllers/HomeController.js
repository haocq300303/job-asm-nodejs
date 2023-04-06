const Product = require("../modules/Product.js");
const { multipleMongooseToObject } = require("../../util/index");

const HomeController = {
  // get all data
  getAll: async (req, res) => {
    try {
      const data = await Product.find({});
      res.render("home", { data: multipleMongooseToObject(data) });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  renderShop: async (req, res) => {
    try {
      const data = await Product.find({});
      res.render("shop", { data: multipleMongooseToObject(data) });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  renderFeatures: async (req, res) => {
    try {
      res.render("features");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  renderBlog: async (req, res) => {
    try {
      res.render("blog");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  renderAbout: async (req, res) => {
    try {
      res.render("about");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  renderContact: async (req, res) => {
    try {
      res.render("contact");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = HomeController;
