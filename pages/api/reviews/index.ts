
import { connect } from "../../../lib/dbConnect";
import reviewModel from "../../../models/review.model";
const jwt = require("jsonwebtoken");


export default async (req:any, res:any) => {
    try {
        await connect();
        let { content, productId } = req.body;
        if(req.method==="GET"){
            const reviews = await reviewModel.find({ productId }).populate("userId");
            res.send(reviews);
        }else {
            const { token } = req.headers;
            if(!token){
                return res.status(401).send("Unauthorised Access!")
            }
            let { id } =  jwt.verify(token, "vdvhsvdsvcdcvsdvcvkc");
            if(req.method==="POST"){
                let hasReviewed = await reviewModel.findOne({productId, userId: id});
                if(!hasReviewed){
                    await reviewModel.create({ productId, userId: id, content });
                    return res.send("Review added Successfully");
                }else{
                    return res.send("Already reviewed");
                }
            }else if(req.method==="DELETE"){
                let hasReviewed = await reviewModel.findOne({productId, userId: id});
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

