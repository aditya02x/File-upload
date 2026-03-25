import mongoose from "mongoose";

export const connectDb = async ()=>{
    try {
       const connect= await mongoose.connect(process.env.Mon);
       console.log("MOngodb is connected sucessfullty")
        
    } catch (error) {
        
        
    }
}

