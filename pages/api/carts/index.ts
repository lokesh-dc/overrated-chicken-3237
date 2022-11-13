import { Console } from "console";
import { connect }  from "../../../lib/dbConnect";
import cartModel from "../../../models/cart.model";
const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const {cookies} = req
    //? A SMALL BUG HERE WHICH CAUSES NO HARM TO THE FEATURE -> if the cookie is undefined...
    // if(!cookies){
    //     return res.send("LOL")
    // }

    const parsedCookie = JSON.parse(cookies.mohallaMartJwt) 
    if(parsedCookie.token){
        try {
            await connect();

            let {id} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                console.log('TEST')
                const cart = await cartModel.find({userId : id}).populate("productId")
                // if(cart.length===0){
                //     res.send("Your cart is empty!");
                // }
                return res.json(cart);
            }
            
            else if(req.method==="POST"){
                const { productId } = req.body;
                console.log(productId, 'ID ,PRODUCTSSSDSF')
                const checkProduct = await cartModel.findOne({productId,userId: id});
                if(!checkProduct){
                    await cartModel.create({productId, userId: id});
                    return res.send("Product added");
                }else{
                    return res.send("Product already Added");
                }
            } 
            else if(req.method === "DELETE"){
                const { productid }:any = req.headers;
                // console.log( 'delete ID', productid, req.headers, 'abc')
                const wishlist = await cartModel.deleteOne({userId: id, productId: productid});
                if(!wishlist){
                    res.status(404).send("Product not found.");
                }
                return res.send("Deleted Successfully");
            }
        } catch (e:any) {
            console.log('eerrrroTEST')
            console.error(e);
            res.status(500).send("LOL");
        }
    }else{
        res.status(401).send("Unauthorised access!");
    }
};
