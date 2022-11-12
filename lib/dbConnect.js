import mongoose from "mongoose";

export const connect = async ()=>{
    console.log(process.env.MONGO_URI)
    return await mongoose.connect("mongodb+srv://lokeshdc:lokeshcd@martdatabase.9uiehdp.mongodb.net/martDatabase");
}
