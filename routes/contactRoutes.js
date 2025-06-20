const express =require("express");
const router = express.Router()
const { submit, createContacts } = require("../controllers/contactController");

router.get("/", getContacts);
router.post("/create/new", createContact);


module.exports = router;