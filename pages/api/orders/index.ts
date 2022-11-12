import { connect }  from "../../../lib/dbConnect";
import ordersModel from "../../../models/orders.mdel";
const jwt = require("jsonwebtoken");

let date = new Date();

export default async (req:any, res:any) => {
    const {token} = req.headers;
    if(token){
        try {
            await connect();
            let {id} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                const orders = await ordersModel.find({userId : id}).populate("productId")
                if(orders.length==0){
                    return res.send("Orders are empty");
                }
                return res.json(orders);
            }
            
            else if(req.method==="POST"){
                const { productId } = req.body;
                const checkProduct = await ordersModel.findOne({productId, userId: id});
                if(!checkProduct){
                    await ordersModel.create({productId, userId: id, date});
                    return res.send("Product added");
                }else{
                    return res.send("Product already Added");
                }
            } 
            else if(req.method === "DELETE"){
                const { id } = req.body;
                const wishlist = await ordersModel.deleteOne({_id: id});
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
