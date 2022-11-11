import { connect }  from "../../../lib/dbConnect";
import wishlistModel from "../../../models/wishlist.model";

let date = new Date();

export default async (req:any, res:any) => {
    try {
        await connect();
        if(req.method==="GET"){
            const wishlist = await wishlistModel.find({}).populate("productId")
            return res.json(wishlist);
        }
        
        else if(req.method==="POST"){
            const { productId, userId } = req.body;
            const checkProduct = await wishlistModel.findOne({productId, userId});
            if(!checkProduct){
                await wishlistModel.create({productId, userId, date});
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
};
