
import { connect } from "../../../lib/dbConnect";
import seller from "../../../models/seller.model";
import userModel from "../../../models/user.model"
const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const { token } = req.headers;
    const {cookies} = req
    const parsedCookie = JSON.parse(cookies.mohallaMartJwt)
    if(parsedCookie.token){
        try {
            await connect();
            let {id} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
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
                if(logged_User?.role==="Admin" || logged_User?.role==="Buyer"){
                    let { storeName , reg} = req.body;
                    await seller.create({storeName, userId : id, reg});
                    return res.send("Seller successfully created!");
                }else{
                    return res.status(401).send("Unauthorised Access!");
                }
            }
            else if(req.method==="PATCH"){
                if(logged_User?.role==="Seller" || logged_User?.role==="Admin"){
                    let update = req.body;
                    let s = await seller.updateOne({userId: id}, update );
                    if(s.modifiedCount>0){
                        return res.send("Updated Successfully");
                    }else{
                        return res.send("Couldn't update Product");
                    }
                }else{
                    return res.send("Unauuthorised access");
                }
            }
            else if(req.method==="DELETE"){
                if(logged_User?.role==="Seller" || logged_User?.role==="Admin"){
                    let d = await seller.deleteOne({userId: id});
                    if(d.deletedCount>0){
                        return res.send("Seller deleted successfully!");
                    }
                    return res.status(404).send("Could't find Seller");
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

