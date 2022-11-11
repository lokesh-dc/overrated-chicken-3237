
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
            if(!logged_User){
                return res.status(401).send("Unauthorised access")
            }
            else if(logged_User.role==="Admin"){
                let users = await seller.find({}).populate("userID");
                return res.json(users)
            }
            else{
                return res.send("Unauthorised access");
            }
        } catch (e:any) {
            console.error(e);
            res.status(500).send(e.message);
        }

}
};

