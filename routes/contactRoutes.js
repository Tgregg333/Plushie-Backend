const express = require("express");
const router = express.Router();
const {
  getContact, 
  createContact,
} = require("../controllers/contactController");

router.get("/", getContact);
router.post("/create/new", createContact);

module.exports = router;
