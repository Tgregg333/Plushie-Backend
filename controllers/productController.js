const Product = require("../models/product");

exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: "Could not get products", error });
  }
};

exports.getProductID = async (req, res) => {
  const { _id } = req.body;
 try {
    const foundProduct = await Product.findById(_id);
    res.status(201).json({ message: "Contact created", foundProduct });
  } catch (error) {
    res.status(400).json({ message: "Failed Product" });
  }
};

exports.createProduct = async (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: "Please place name and price" });
  }
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json({ message: "Product created", createdProduct });
  } catch (error) {
    res.status(400).json({ message: "Failed Product" });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params._id, req.body);
    if (!updated)
      return res.status(400).json({ message: "Unable to find Product" });

    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: "Update Failed", error });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params._id);

    res.json({ message: "You have deleted your product" });
  } catch (error) {
    res.status(400).json({ message: "Deletion Failed", error });
  }
};
