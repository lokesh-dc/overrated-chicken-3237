import mongoose from "mongoose";

export const connect = async ()=>{
    return await mongoose.connect("mongodb://127.0.0.1:27017/mohallamart");
}
