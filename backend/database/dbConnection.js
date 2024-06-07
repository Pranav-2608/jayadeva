import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export async function dbConnection() {
    const uri = 'mongodb+srv://pranavchitlangia2608:pranav2003@cluster0.smamepd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}


