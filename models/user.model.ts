import { Schema , model, models } from "mongoose";


const usersSchema = new Schema({
    firstName : String , 
    lastName : String,
    email : {type : String , unique : true , required : true},
    verified : {type: Boolean, default: false, required: true},
    password : {type : String ,  required : true},
    role : {type: String ,  enum : ["Seller", "Buyer", "Admin"] , default: "Buyer"},
})

const userModel = models.user || model( "user" , usersSchema );

export default userModel;

