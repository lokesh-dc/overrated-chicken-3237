import { connect } from "../../../lib/dbConnect";
import orderModel from "../../../models/orders.mdel";
import userModel from "../../../models/user.model";

const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const { cookies } = req;
    const parsedCookie = JSON.parse(cookies.mohallaMartJwt)
    if(!parsedCookie.token){
        return res.status(401).send("Unauthorised access");
    }
    try {
        await connect();
        const {id, email} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");

        let loggedUser = await  userModel.findOne({_id: id ,email})
        if(!loggedUser){
            return res.send("Unauthorised access detected. Kindly Login!");
        }
        if(req.method==="GET"){   
            // console.log('looGGEEDDD USER',loggedUser)
            // if(loggedUser.role ==="Admin"){
                let orders = await orderModel.find({}, {password: 0}).populate(`productId`)
                return res.json(orders)
            // }else{
            //     return res.status(401).send("Missing permissions");
            // }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

