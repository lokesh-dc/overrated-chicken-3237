
import { connect }  from "../../../lib/dbConnect";

import productsModel from "../../../models/product.model";


export default async (req:any, res:any) => {
    let query = req.query;
    try {
        await connect();
        if(req.method==="GET"){
           console.log(query);
        }else{
            return res.status(401).send("Operation not allowed");
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

