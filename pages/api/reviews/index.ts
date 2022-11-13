
import { connect } from "../../../lib/dbConnect";
import reviewModel from "../../../models/review.model";
const jwt = require("jsonwebtoken");


export default async (req:any, res:any) => {
    try {
        await connect();
        let { content, productId,rating } = req.body;
        const {id} =req.headers
        const dateToChange= new Date().toString().split(" ");
        const date = `${dateToChange[2]}/${dateToChange[1]}/${dateToChange[0]}`
        if(req.method==="GET"){
            const reviews = await reviewModel.find({productId:id}).populate("userId");
            res.send(reviews);
        }else {
            const { cookies } = req;
            const parseCookie:any= JSON.parse(cookies.mohallaMartJwt)
            if(!parseCookie.token){
                return res.status(401).send("Unauthorised Access!")
            }
            let { id } =  jwt.verify(parseCookie.token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="POST"){
                let hasReviewed = await reviewModel.findOne({productId, userId: id});
                if(!hasReviewed){
                    await reviewModel.create({ productId, userId: id, content,rating ,date:date});
                    return res.send("Review added Successfully");
                }else{
                    return res.send("Already reviewed");
                }
            }else if(req.method==="DELETE"){
                const { cookies } = req;
                const parseCookie:any= JSON.parse(cookies.mohallaMartJwt)
                const Userid =  jwt.verify(parseCookie.token, "vdvhsvdsvcdcvsdvcvkc");
                let hasReviewed = await reviewModel.findOne({productId:id, userId: Userid.id});
                if(!hasReviewed){
                    return res.status(401).send("Missing Permissions");
                }
                const deleteStatus = await reviewModel.deleteOne({id});
                if(deleteStatus.deletedCount>0){
                    return res.send("Review deleted successfully.")
                }
                return res.send("Could't delete review or already been deleted");
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

