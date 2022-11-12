
import { connect } from "../../../lib/dbConnect";
import otpModel from "../../../models/otp.model";
import usersModel from "../../../models/user.model";

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "lokesh.cdewanand@gmail.com",
        pass: "kukhqfbjgzormkkv"
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
            let user = await usersModel.updateOne({email}, {verified: true});
            console.log(user)
            return res.send("User Verified Successfully!");
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

