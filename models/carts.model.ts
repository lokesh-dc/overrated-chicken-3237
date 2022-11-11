import mongoose,{ Schema , model } from "mongoose";


const cartSchema = new Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, ref:("users")},
    productId : { type : mongoose.Schema.Types.ObjectId, ref:("products")}
})

// const wishlistModel = model( "wishlist" ,wishlistSchema );

export default mongoose.models.cart || mongoose.model("cart",cartSchema)

