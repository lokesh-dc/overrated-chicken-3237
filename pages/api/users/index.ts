
import { connect } from "../../../lib/dbConnect";
import userModel from "../../../models/user.model";

const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const {token} = req.headers;
    if(!token){
        return res.status(401).send("Unauthorised access");
    }
    try {
        await connect();
        const {id, email} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");

        let loggedUser = await  userModel.findOne({_id: id ,email})
        if(!loggedUser){
            return res.send("Unauthorised access detected. Kindly Login!");
        }
        if(req.method==="GET"){   
            if(loggedUser==="Admin"){
                let users = await userModel.find({}, {password: 0})
                return res.json(users)
            }else{
                return res.status(401).send("Missing permissions");
            }
        }
        else if(req.method==="POST"){
            let updated = req.body;
            const updateStatus = await userModel.updateOne({id}, updated);
                if(updateStatus.modifiedCount>0){
                    return res.send("Brand details updated successfully.")
                }
                return res.send("Could't update details or already been updated");
        }
        else if(req.method==="DELETE"){
            const deleteStatus = await userModel.deleteOne({id});
                if(deleteStatus.deletedCount>0){
                    return res.send("User details deleted successfully.")
                }
                return res.send("Could't delete details or already been deleted");
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

