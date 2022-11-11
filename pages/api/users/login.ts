
import { connect } from "../../../lib/dbConnect";
import user from "../../../models/users.model";

const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    try {
        await connect();

        if(req.method === "POST"){
            const { email, password} = req.body;
            let userCheck = await user.findOne({ email, password});
            if(userCheck){
                let id = userCheck._id;
                let token = jwt.sign({email, id},"vdvhsvdsvcdcvsdvcvkc");
                return res.send({message:"Succesfully Logged in", token})  
            }else{
                return res.status(401).send("Invalid Credentials")
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

