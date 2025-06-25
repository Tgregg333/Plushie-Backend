const express =require("express");
const router = express.Router()

const {
    getProduct, //need to finish 
    getProductID, // need to finish 
    updateProduct,
    createProduct,
    deleteProduct
}
= require ("../controllers/productController");


  router.get("/", getProduct);
  router.get("/:id", getProductID);
  router.post("/create/new", createProduct);
  router.put("/edit/:id",updateProduct)
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
  