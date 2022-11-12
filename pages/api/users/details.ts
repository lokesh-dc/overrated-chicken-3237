import userModel from "../../../models/user.model";

const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const {token} = req.headers;
    if(token){        
        try{
            let {id,  email} = jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            let user = await userModel.findOne({_id: id, email});
            res.send({ack: true, user});
        }
        catch(e:any){
            let message = e.message
            res.send({ack: false, data : message });
        }
    }else{
        res.send("no cookie");
    }

}