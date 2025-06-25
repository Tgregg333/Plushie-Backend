const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
connectDB();

const contactRoutes = require("./routes/contactRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

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


//google strat
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "",
//     },
//     async (accessToken, refershToken, profile, done) =>
//   )
// )
