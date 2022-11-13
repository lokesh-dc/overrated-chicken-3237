import { connect }  from "../../../lib/dbConnect";
import wishlistModel from "../../../models/wishlist.model";
const jwt = require("jsonwebtoken");


let date = new Date();

export default async (req:any, res:any) => {
    const {cookies} = req
    
    const parsedCookie = JSON.parse(cookies.mohallaMartJwt)
    // console.log(JSON.parse(cookies.mohallaMartJwt), 'COOKIESs', parsedCookie)
    if(parsedCookie.token){
        try {
            await connect();
            let {id} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="GET"){
                const wishlist = await wishlistModel.find({userId : id}).populate("productId")
                // if(wishlist.length==0){
                //     return res.send("Your Wishlist is empty");
                // }
                // console.log(wishlist, 'THIS IS WISHLIST')
                return res.json(wishlist);
            }
            
            else if(req.method==="POST"){
                // res.send(req.body)
                const { productId } = req.body;
                const checkProduct = await wishlistModel.findOne({productId, userId: id});
                if(!checkProduct){
                    await wishlistModel.create({productId, userId: id, date});
                    return res.send("Product added");
                }else{
                    return res.send("Product already Added");
                }
            } 
            // else if(req.method === "DELETE"){
                // const { productid } = req.headers;
                // console.log('ID', req.headers, 'abc', req.body)
                // const wishlist = await wishlistModel.deleteOne({userId: id, productId: productid});
            //     return res.send("Deleted Successfully");
            // }
        } catch (e:any) {
            console.log('TRIGGER')
            console.error(e);
            res.status(500).send(e.message);
        }
    }else{
        return res.status(401).send("Unauthorised Access");
    }
};
