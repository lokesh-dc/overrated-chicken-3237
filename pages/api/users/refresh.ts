import userModel from "../../../models/user.model";
import { serialize } from "cookie";


const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    const {token} = req.headers;
    console.log("check", token);
    if(token){        
        try{
            let {id,  email} = jwt.verify(token, "refreshbvhvbfhvfbhfvkbvfdkdfbdfhbvdfbvdf");
            let user = await userModel.findOne({_id: id, email});
            if(user){
                let newToken = jwt.sign({email, id},"vdvhsvdsvcdcvsdvcvkc");
                let refreshToken = jwt.sign({email, id},"refreshbvhvbfhvfbhfvkbvfdkdfbdfhbvdfbvdf");

                const cookieToken = serialize("mohallaMartJwt", JSON.stringify({token: newToken, refreshToken}), {
                    httpOnly: true,
                    secure: "development" !== "development",
                    sameSite: "strict",
                    maxAge: 60*60*12, // 12 Hours
                    path: "/",
                  });
                  console.log("newToken");
                res.setHeader("Set-Cookie", cookieToken);

                res.send({ack: true, newToken});
            }
        }
        catch(e:any){
            let message = e.message
            res.send({ack: false, data : message });
        }
    }else{
        res.send("no cookie");
    }

}