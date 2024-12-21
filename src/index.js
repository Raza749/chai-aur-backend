// require('dotenv').config({path:"./env"});
import connectDB from './db/index.db.js';
import dotenv from 'dotenv';
dotenv.config({
    path:'./env'
});




// Connect the Database
connectDB();    











/*
import express from 'express';
const app = express();

; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERRR", error);
            throw error
        });
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on the port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR : ", error);
        throw error
    }
})();
*/