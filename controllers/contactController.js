const Contacts = require ("../models/contact");

exports.submit = async (req,res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).json ({ message: "Successfully Sent", contact});
    } catch (error) {
        res.status(400).json ({ message: "Messaged Failed", error})
    }
};

