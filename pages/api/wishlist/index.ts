import { ObjectId } from "mongodb";

import { connect }  from "../../../lib/dbConnect";
import productModel from "../../../models/products.model";

import wishlistModel from "../../../models/wishlist.model";

let date = new Date();

export default async (req:any, res:any) => {
    try {
        await connect();
        if(req.method==="GET"){
            const wishlist = await wishlistModel.find({}).populate({path : "product", model : productModel, options : { strictPopolate : false } }).exec((err, product) => {
                console.log("Populated User " + product);
              });
            return res.json(wishlist);
        }
        
        else if(req.method==="POST"){
            const { productId, userId } = req.body;
            const wishlist = await wishlistModel.create({productId, userId, date});
            return res.json(wishlist);   
        }
        
        else if(req.method==="PATCH"){
            const user = req.body;
            const id = user.id;
            const dbwishlist = await wishlistModel.findOne({_id: id});

            let title = user.title ?  user.title : dbwishlist?.title;
            let price = user.price ? user.price : dbwishlist?.price;
            let quantity = user.quantity ? user.quantity : dbwishlist?.quantity;
            let src = user.src ? user.src : dbwishlist?.src
            
            const wishlist = await wishlistModel.updateOne({_id: id}, {$set: { title: user.title || dbwishlist?.title, price, quantity, src }})
            return res.json(wishlist);
        }
        
        else if(req.method === "DELETE"){
            const { id } = req.body;
            const wishlist = await wishlistModel.deleteOne({_id: id});
            return res.send(wishlist);
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};


// function getUserWithPosts(username){
//     return User.findOne({ username: username })
//       .populate('posts').exec((err, posts) => {
//         console.log("Populated User " + posts);
//       })
//   }
  