import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

export const connectDb = async ()=>{
    try {
       const connect= await mongoose.connect(process.env.MONGO_URL);
       console.log("MOngodb is connected sucessfullty")
        
    } catch (error) {
        console.log("cannot connect to database")

        
    }
}

