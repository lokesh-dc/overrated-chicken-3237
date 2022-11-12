import { Schema , model, models } from "mongoose";

const orderShema = new Schema({
    userId : { type : Schema.Types.ObjectId, ref:"user"},
    productId : { type : Schema.Types.ObjectId, ref:"product"}
}, {strict: false});

const orderModel = models.order || model( "order" , orderShema );

export default orderModel;