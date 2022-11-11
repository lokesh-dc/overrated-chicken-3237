import mongoose,{ Schema , model } from "mongoose";


const productsSchema = new Schema({
    title : {type : String},
    src : {type: String},
    seller : {type : mongoose.Schema.Types.ObjectId, ref:"seller"},
    description : {type: String}
})

// const wishlistModel = model( "wishlist" ,wishlistSchema );

export default mongoose.models.product || mongoose.model("product",productsSchema)

// product: {
//     type: mongoose.Schema.ObjectId,
//     ref: 'Product', <-- Should be same as modelName
//     required: [true, 'Cart must belong to a product']
// }