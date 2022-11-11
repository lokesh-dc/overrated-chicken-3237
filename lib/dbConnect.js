import mongoose from "mongoose";

export const connect = async ()=>{
    return await mongoose.connect("mongodb+srv://lokeshdc:lokeshcd@martdatabase.9uiehdp.mongodb.net/martDatabase");
}
