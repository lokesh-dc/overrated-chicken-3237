import mongoose,{ Schema , model } from "mongoose";


const usersSchema = new Schema({
    firstName : String , 
    lastName : String,
    email : {type : String , unique : true , required : true},
    password : {type : String ,  required : true},
    role : {type: String ,  enum : ["Seller", "Buyer", "Admin"] , default: "Buyer"}
})

const user = mongoose.models.user || model( "user" , usersSchema );

export default  user;

