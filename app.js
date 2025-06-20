const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const contactRoutes = require("./routes/contactRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

dotenv.config();
const connectDB = require("./config/db");
connectDB();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Plushie Shop");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



