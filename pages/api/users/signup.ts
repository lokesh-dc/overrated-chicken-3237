
import { connect } from "../../../lib/dbConnect";
import usersModel from "../../../models/user.model";
const jwt = require("jsonwebtoken");


export default async (req:any, res:any) => {
    try {

        await connect();
        if(req.method === "POST"){
            const { firstName, lastName, mobile, email, password, role} = req.body;
            const user = await usersModel.findOne({email})
            if(user){
                return res.status(401).send("Email Id exists")
            }else{
                let user = await usersModel.create({firstName, lastName, email, password, mobile, role});
                if(role==="Seller"){
                    let id = user._id;
                    let token = jwt.sign({email, id},"vdvhsvdsvcdcvsdvcvkc");
                    return res.send({role : user.role, message : "Verify Seller details", token})
                }
                res.send({message: "User created", role:user.role });
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

