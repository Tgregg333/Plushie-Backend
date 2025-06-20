const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL,  {
            useNewUrlParser: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (error) {
        console.error ("MongoDB error", error.message);
        
        
    }
}

module.exports = connectDB