import { connect }  from "../../../lib/dbConnect";
import { cartModel } from "../../../models";
import ordersModel from "../../../models/orders.mdel";
const jwt = require("jsonwebtoken");

let date = new Date();

export default async (req:any, res:any) => {
    const {cookies} = req;
    const parsedCookie = JSON.parse(cookies.mohallaMartJwt) 
    if(parsedCookie.token){
        try {
            await connect();
            console.log("cookie", parsedCookie.token)
            let {id} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                const orders = await ordersModel.find({userId : id}).populate("productId")
                return res.json(orders);
            }
            
            else if(req.method==="POST"){
                const { message } = req.body;
                let cart = await cartModel.find({userId:id}, {_id:0});
                let orders = await ordersModel.insertMany(cart);
                // let deleted = await cartModel.deleteMany(cart);
                // console.log(deleted);
                return res.send(orders);
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
