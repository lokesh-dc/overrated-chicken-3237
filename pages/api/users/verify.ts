
import { connect } from "../../../lib/dbConnect";
import otpModel from "../../../models/otp.model";
import usersModel from "../../../models/user.model";

import { serialize } from "cookie";


const nodemailer = require("nodemailer");

const jwt = require("jsonwebtoken");
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "",
        pass: ""
    },
    tls : {
        rejectUnauthorized : false 
    }
})


export default async (req:any, res:any) => {
    try {
        await connect();
        if(req.method === "POST"){
            let { email, otp} = req.body;
            let verify = await otpModel.findOne({email, otp});
            if(!verify){
                return res.send("Verification failed!");
            }
            await otpModel.deleteOne({email, otp});
            let userCheck = await usersModel.findOneAndUpdate({email}, {verified: true});

            let id = userCheck._id;
            let token = jwt.sign({email, id},"vdvhsvdsvcdcvsdvcvkc");
            let refreshToken = jwt.sign({email, id},"refreshbvhvbfhvfbhfvkbvfdkdfbdfhbvdfbvdf");
            
            const cookieToken = serialize("mohallaMartJwt",  JSON.stringify({token, refreshToken}), {
                httpOnly: true,
                secure: "development" !== "development",
                sameSite: "strict",
                maxAge: 60*60*12, //12hours
                path: "/",
              });
            
              res.setHeader("Set-Cookie", cookieToken);

            return res.send({message: "User successfully created", token, refreshToken});
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

