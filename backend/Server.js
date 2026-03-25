import {connectDb} from "./config/db.js";
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.use(express.json());


 const PORT = process.env.PORT || 5000

// test route
app.get('/', (req, res) => {
  res.send('API running');
});

const Stratserver = async ()=>{
  try {
      await connectDb()
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`)
    })
    
  } catch (error) {
     console.error(`Failed to start server: ${error.message}`);
    process.exit(1);
    
  }
}
Stratserver()