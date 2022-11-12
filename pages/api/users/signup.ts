
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
            const { firstName, lastName, mobile, email, password, role} = req.body;
            let verified = false;
            const user = await usersModel.findOne({email})
            if(user){
                return res.status(401).send("Email Id exists")
            }else{
                let user = await usersModel.create({firstName, lastName, email, password, mobile, role, verified});
                let otp = Math.floor(Math.random() * 100000);
                await otpModel.findOneAndDelete({email});
                await otpModel.create({email: email, otp: otp, verified : false});
                transporter.sendMail({
                    to: email,
                    from : "Mohollamart@gmail.com",
                    subject : `Account Verification : ${email} `,
                    text: `Account successfully created Here is the OTP : ${otp} to verify your email ID`
                },(error:any, info:any)=>{
                    if(error){
                        console.log("Something went wrong",error)
                    }else{
                        console.log(`email sent ${email}`)
                    }
                })
                
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

