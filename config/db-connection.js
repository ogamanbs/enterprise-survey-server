const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const connectToDatabase = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if(!uri) {
            throw new Error("MONGODB_URI is not defined in configuration");
        }
        await mongoose.connect(uri);
        console.log('Connected to Database');
    } catch(err) {
        console.error("Error connecting to the database: " + err.message);
        process.exit(1);
    }
}

connectToDatabase();

module.exports = mongoose.connection;