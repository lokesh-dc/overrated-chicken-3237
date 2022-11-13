import { connect } from "../../../../lib/dbConnect";
import { wishlistModel } from "../../../../models";
const jwt = require("jsonwebtoken")

export default async (req:any, res:any) => {
    const { productId } = req.query;
    const {cookies} = req
    
    const parsedCookie = JSON.parse(cookies.mohallaMartJwt)
    try {
        await connect();
        let {id} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
        if(req.method==="DELETE"){
          //  let products = await productsModel.find({ "title" : { "$regex": title , "$options": "i" } },);
          const wishlist = await wishlistModel.deleteOne({userId: id, productId: productId});
          res.send("Item deleted successfully")
        }else{
            return res.status(401).send("Item not deleted");
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
  }