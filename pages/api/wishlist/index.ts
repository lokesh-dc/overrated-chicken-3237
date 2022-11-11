import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

let date = new Date();

export default async (req:any, res:any) => {
    try {
        const client = await clientPromise;
        const db = client.db("Mart");
        if(req.method==="GET"){
            const {id} = req.body;
            const wishlist = await db.collection("wishlists").find({}).toArray();

            return res.json(wishlist);
        }
        
        else if(req.method==="POST"){
            const { productId, userId } = req.body;
            const wishlist = await db.collection("wishlists").insertOne({product : productId, user : userId, date});
            return res.json(wishlist);   
        }
        
        else if(req.method==="PATCH"){
            const user = req.body;
            const id = user.id;
            const dbwishlist = await db.collection("wishlists").findOne({_id: ObjectId(`${id}`)});

            let title = user.title ?  user.title : dbwishlist?.title;
            let price = user.price ? user.price : dbwishlist?.price;
            let quantity = user.quantity ? user.quantity : dbwishlist?.quantity;
            let src = user.src ? user.src : dbwishlist?.src
            
            const wishlist = await db.collection("wishlists").updateOne({_id: ObjectId(`${id}`)}, {$set: { title: user.title || dbwishlist?.title, price, quantity, src }})
            return res.json(wishlist);
        }
        
        else if(req.method === "DELETE"){
            const { id } = req.body;
            const wishlist = await db.collection("wishlists").deleteOne({_id: ObjectId(`${id}`)});
            return res.send(wishlist);
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

