import { Schema , model, models } from "mongoose";

const otpSchema = new Schema({
    email : { type: String, required: true},
    otp : { type: Number, required: true},
    verified : Boolean,
})


const otpModel = models.otp || model("otp",otpSchema)

export default  otpModel;