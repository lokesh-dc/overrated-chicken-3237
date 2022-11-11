import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async (req:any, res:any) => {
    try {
        const client = await clientPromise;
        const db = client.db("Mart");
        if(req.method==="GET"){
            const products = await db.collection("products").find().toArray();
            return res.json(products);
        }
        
        else if(req.method==="POST"){
            const { title, price, quantity, src, description } = req.body;
            const product = await db.collection("products").insertOne({title, price, quantity, src, description});
            return res.json(product);   
        }
        
        else if(req.method==="PATCH"){
            const user = req.body;
            const id = user.id;
            const dbProduct = await db.collection("products").findOne({_id: ObjectId(`${id}`)});

            let title = user.title ?  user.title : dbProduct?.title;
            let price = user.price ? user.price : dbProduct?.price;
            let quantity = user.quantity ? user.quantity : dbProduct?.quantity;
            let src = user.src ? user.src : dbProduct?.src
            
            const product = await db.collection("products").updateOne({_id: ObjectId(`${id}`)}, {$set: { title: user.title || dbProduct?.title, price, quantity, src }})
            return res.json(product);
        }
        
        else if(req.method === "DELETE"){
            const { id } = req.body;
            const product = await db.collection("products").deleteOne({_id: ObjectId(`${id}`)});
            return res.send(product);
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

