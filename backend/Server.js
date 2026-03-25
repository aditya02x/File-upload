import connectDB from "../../Blog_Api3/backend/src/config/db";
import express from 'express'

const app = express()

const Stratserver = async ()=>{
  try {
      await connectDB()
    app.listen(prompt,()=>{
        console.log(`server is running on ${PORT}`)
    })
    
  } catch (error) {
     console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
    
  }
}
Stratserver()