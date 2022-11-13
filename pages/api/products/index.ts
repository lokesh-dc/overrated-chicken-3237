
import { connect }  from "../../../lib/dbConnect";

import productsModel from "../../../models/product.model";

// import cookieCutter from 'cookie-cutter'

export default async (req:any, res:any) => {

    // console.log(cookieCutter.get("mohallaMartJwt"))

    // console.log( 'THIS IS COOKIE AUTH JWT', cookies)
    try {
        await connect();
        if(req.method==="GET"){
            const products = await productsModel.find()
            return res.send(products);
        }
        
        else if(req.method==="POST"){
            const { title, price, quantity, src, description } = req.body;
            console.log('PRICEEEEEE', price)
            const product = await productsModel.create({title, price, quantity, src, description});
            return res.json(product);   
        }
        
        else if(req.method==="PATCH"){
            const user = req.body;
            const id = user.id;
            const dbProduct = await productsModel.findOne({_id: id});

            let title = user.title ?  user.title : dbProduct?.title;
            let price = user.price ? user.price : dbProduct?.price;
            let quantity = user.quantity ? user.quantity : dbProduct?.quantity;
            let src = user.src ? user.src : dbProduct?.src
            
            const product = await productsModel.updateOne({_id: id}, { title: user.title || dbProduct?.title, price, quantity, src })
            return res.json(product);
        }
        
        else if(req.method === "DELETE"){
            const { id } = req.body;
            const product = productsModel.deleteOne({_id: id});
            return res.send(product);
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

