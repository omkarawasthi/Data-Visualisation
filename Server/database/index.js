import mongoose from "mongoose";
import { config } from 'dotenv';

config({
    path: "./config.env",
})
// database connection
export const mongoDB = () => {
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("MongoDb database is connected!");
    })
    .catch((error) => {
        console.log(error);
    });
}