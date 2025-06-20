const express =require("express");
const { createProduct } = require("../controllers/productController");
const router = express.Router()

const {
    getProducts,
    getProductID,
    createProduct,
    editProduct,
    deleteProduct
}
= require ("../controllers/productController");


  router.get("/", getProducts);
  router.get("/:id", getProductID);
  router.post("/create/new", createProduct);
  router.put("/edit/:id",editProduct)
  router.delete("/delete/:id", deleteProduct)

  module.exports = router;


// router.get("/", (require, response) => {
//     response.json({ message: `Get products` });
//   });
  
// router.get("/:id", (require, response) => {
//     response.json({ message: `Get product with your ID` });
//   });
  
// router.post("/create/new", createProduct);
  
// router.put("/edit/:id", (require, response) => {
//     response.json({ message: `Edit product` });
//   });
  
// router.delete("/delete/:id", (require, response) => {
//     response.json({ message: `Delete product` });
//   });
  