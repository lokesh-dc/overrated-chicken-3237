
import { connect }  from "../../../lib/dbConnect";

import productsModel from "../../../models/product.model";


export default async (req:any, res:any) => {
    try {
        await connect();
        if(req.method==="GET"){
            let id = req.query.id;
            const products = await productsModel.find({_id: id})
            // console.log(products[0], "PRODUCTS")
            return res.send(products[0]);
        }else{
            return res.status(401).send("Operation not allowed");
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

