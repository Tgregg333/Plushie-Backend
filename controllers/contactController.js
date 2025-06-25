const Contact = require ("../models/contact");

exports.submit = async (req,res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).json ({ message: "Successfully Sent", savedContact});
    } catch (error) {
        res.status(400).json ({ message: "Messaged Failed", error})
    }
};


// wasnt running because get contact didnt exist 
exports.getContact = async (req,res) =>{
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error){
        res.status(400).json ({ message: "Failed to find contacts", error})
    }

};


exports.createContact = async (req,res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        res.status(201).json({ message: "Contact created", savedContact});
    } catch (error) {
        res.status(400).json({ message: "Failed contact"});
    }

}
