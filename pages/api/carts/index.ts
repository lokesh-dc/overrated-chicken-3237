import { connect }  from "../../../lib/dbConnect";
import cartModel from "../../../models/cart.model";
const jwt = require("jsonwebtoken");

let date = new Date();

export default async (req:any, res:any) => {
    const {token} = req.headers;
    if(token){
        try {
            await connect();

            let {id} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                const cart = await cartModel.find({userId : id}).populate("productId")
                if(cart.length===0){
                    res.send("Your cart is empty!");
                }
                return res.json(cart);
            }
            
            else if(req.method==="POST"){
                const { productId, userId } = req.body;
                const checkProduct = await cartModel.findOne({productId, userId});
                if(!checkProduct){
                    await cartModel.create({productId, userId, date});
                    return res.send("Product added");
                }else{
                    return res.send("Product already Added");
                }
            } 
            else if(req.method === "DELETE"){
                const { id } = req.body;
                const wishlist = await cartModel.deleteOne({_id: id});
                if(!wishlist){
                    res.status(404).send("Product not found.");
                }
                return res.send("Deleted Successfully");
            }
        } catch (e:any) {
            console.error(e);
            res.status(500).send(e.message);
        }
    }else{
        res.status(401).send("Unauthorised access!");
    }
};
