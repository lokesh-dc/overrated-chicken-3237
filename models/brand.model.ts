import mongoose,{ Schema , model } from "mongoose";


const brandSchema = new Schema({
    name : {type: String, required : true, unique: true},
    logo : {type: String},
    offer : {type: String},
})


export default mongoose.models.brand || mongoose.model("brand",brandSchema)
