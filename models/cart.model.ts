import mongoose,{ Schema , model , models} from "mongoose";


const cartSchema = new Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, ref:"user"},
    productId : { type : mongoose.Schema.Types.ObjectId, ref:"product"},
    quantity : {type: Number, default : 1}
})

const cartModel = models.cart || model("cart",cartSchema)

export default cartModel;

