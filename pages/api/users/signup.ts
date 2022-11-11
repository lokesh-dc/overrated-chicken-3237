
import { connect } from "../../../lib/dbConnect";
import usersModel from "../../../models/users.model";

export default async (req:any, res:any) => {
    try {

        await connect();
        if(req.method === "POST"){
            const { firstName, lastName, mobile, email, password} = req.body;

            const user = await usersModel.findOne({email})
            if(user){
                return res.status(401).send("Email Id exists")
            }else{
                await usersModel.create({firstName, lastName, email, password, mobile});
                res.send("User created")
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

