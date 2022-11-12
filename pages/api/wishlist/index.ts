import { connect }  from "../../../lib/dbConnect";
import wishlistModel from "../../../models/wishlist.model";
const jwt = require("jsonwebtoken");


let date = new Date();

export default async (req:any, res:any) => {
    const {token} = req.headers;
    const {cookies} = req

    console.log(cookies, 'COOKIES')
    
    if(token){
        try {
            await connect();
            let {id} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                const wishlist = await wishlistModel.find({userId : id}).populate("productId")
                if(wishlist.length==0){
                    return res.send("Your Wishlist is empty");
                }
                return res.json(wishlist);
            }
            
            else if(req.method==="POST"){
                const { productId } = req.body;
                const checkProduct = await wishlistModel.findOne({productId, userId: id});
                if(!checkProduct){
                    await wishlistModel.create({productId, userId: id, date});
                    return res.send("Product added");
                }else{
                    return res.send("Product already Added");
                }
            } 
            else if(req.method === "DELETE"){
                const { id } = req.body;
                const wishlist = await wishlistModel.deleteOne({_id: id});
                return res.send("Deleted Successfully");
            }
        } catch (e:any) {
            console.error(e);
            res.status(500).send(e.message);
        }
    }else{
        return res.status(401).send("Unauthorised Access");
    }
};
