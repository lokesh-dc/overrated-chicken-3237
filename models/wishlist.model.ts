import mongoose,{ Schema , model, models } from "mongoose";


const wishlistSchema = new Schema({
    userId : { type : Schema.Types.ObjectId, ref:"user"},
    productId : { type : Schema.Types.ObjectId, ref:"product"}
}, {strict: false})

const wishlistModel = models.wishlist || model( "wishlist" ,wishlistSchema );

export default wishlistModel
