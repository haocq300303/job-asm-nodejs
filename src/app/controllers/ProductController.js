const Product = require("../modules/Product.js");
const {
  multipleMongooseToObject,
  MongooseToObject,
} = require("../../util/index");

const ProductController = {
  // get all data
  getAll: async (req, res) => {
    try {
      const data = await Product.find({});
      res.render("Admin/listProduct", { data: multipleMongooseToObject(data) });
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getDetail: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        res.send({
          messenger: "Không tìm thấy sản phẩm",
        });
      }
      res.render("Admin/updateProduct", {
        data: MongooseToObject(product),
      });
    } catch (err) {
      res.status(500).json({ messenger: err });
    }
  },
  renderAdd: (req, res) => {
    res.render("Admin/addProduct");
  },
  create: async (req, res) => {
    try {
      const product = new Product(req.body);
      if (!product) {
        res.send({
          messenger: "Thêm sản phẩm không thành công",
        });
      }
      await product.save();
      res.redirect("/admin");
    } catch (err) {
      res.status(500).json({ messenger: err });
    }
  },
  delete: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      return res.redirect("/admin");
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  },
  update: async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      if (!product) {
        res.send({
          messenger: "Update sản phẩm không thành công",
        });
      }
      res.redirect("/admin");
    } catch (err) {
      res.status(500).json({ messenger: err });
    }
  },
};

module.exports = ProductController;
