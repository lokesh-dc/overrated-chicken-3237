import { Schema , model, models } from "mongoose";


const sellerSchema = new Schema({
    userId : { type : Schema.Types.ObjectId, ref:"user"},
    storeName : {type: String},
    reg : {type: String},
    verified :{ type: Boolean , default : false }
})  

const seller = models.seller || model( "seller" , sellerSchema );

export default  seller;

