
import { connect } from "../../../lib/dbConnect";
import seller from "../../../models/seller.model";
import userModel from "../../../models/user.model"
const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const { token } = req.headers;
    if(token){
        try {
            await connect();
            let {id} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            let logged_User = await userModel.findOne({_id: id});
            if(req.method==="GET"){
                if(logged_User?.role==="Admin"){
                    let users = await seller.find({}).populate("userId");
                    return res.json(users)
                }
                else{
                    return res.send("Unauthorised access");
                }
            }
            else if(req.method==="POST"){
                if(logged_User?.role==="Admin" || logged_User?.role==="Seller"){
                    let { storeName , reg} = req.body;
                    await seller.create({storeName, userId : id, reg});
                    return res.send("Seller successfullt created!");
                }else{
                    return res.status(401).send("Unauthorised Access!");
                }
            }
            else if(req.method==="PATCH"){
                if(logged_User?.role==="Seller" || logged_User?.role==="Admin"){
                    let update = req.body;
                    console.log(update, logged_User )
                    let s = await seller.updateOne({userId: id}, update );
                    return res.send(s)
                    return res.send("Updated Successfully");
                }else{
                    return res.send("Unauuthorised access");
                }
            }
            else if(req.method==="DELETE"){
                if(logged_User?.role==="Seller"){
                    let d = await seller.deleteOne({userId: id});
                    return res.send(d);
                }else{
                    return res.send("Unauthorised Access");
                }
            }
        } catch (e:any) {
            console.error(e);
            res.status(500).send(e.message);
        }
    }else{
        return res.status(401).send("Unauthorised access");
    }
};

