
  
 const products = require("/model/product");

 exports.getProducts = async (req,res) => {
    res.json(products);
 };

 exports.createProduct = async (req, res) => {
    const{ name, price} = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({message: "Please place name and price"});
        
    }
 }

 exports.updateProduct = async ( req, res ) => {
    try {
        const updated = await Product.findByIdAndUpdate (req.params.id, req.body);
        if (!updated) return res.status(404).json ({message: "Unable to find Product"});

        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: "Update Failed", error});
    }
 };

 exports. deleteProduct = async (req, res) => {
    try {
        const deleted = await Product.finyByIdAndDelete(req.params.id);

        res.json({ message: "You have deleted your product"});
    } catch (error) {
        res.status(500).json({ message: "Deletion Failed", error});
    }

 }