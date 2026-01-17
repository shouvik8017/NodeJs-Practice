import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Pinged your deployment. You successfully connected to MongoDB! : ${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

export default connectDB;