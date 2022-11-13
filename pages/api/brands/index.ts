
import { connect }  from "../../../lib/dbConnect";

import brandModel from "../../../models/brand.model";
import userModel from "../../../models/user.model";

const jwt = require("jsonwebtoken");


export default async (req:any, res:any) => {
    try {
        await connect();
        if(req.method==="GET"){
            const products = await brandModel.find({})
            return res.send(products);
        }else{
            const { cookies } = req;
            const parsedCookie:any = JSON.parse(cookies.mohallaMartJwt)
            console.log(parsedCookie, 'PARSED COOKIE')
            if(!parsedCookie.token){
                return res.send("Unauthorised access!");
            }

            const {id, email} = jwt.verify(parsedCookie.token, "vdvhsvdsvcdcvsdvcvkc");
            let loggedUser = await  userModel.findOne({_id: id ,email})
            console.log('LLAALALALAALA',loggedUser);
            
            if(!loggedUser || !(loggedUser?.role==="Seller" || loggedUser?.role==="Admin")){
                console.log('TIMTINTINTINT')
                return res.status().send("Unauthorised access");
            }
            if(req.method==="POST"){
                let { name, logo, offer} = req.body;
                let brandSearch = await brandModel.find({name});
                if(brandSearch.length!==0){
                    return res.send({message: "Brand already present.", data : brandSearch})
                }
                await brandModel.create({name, logo, offer});
                res.send("Brand created successfully");
           }
           else if(req.method==="PATCH"){
                let updated = req.body;
                let {id} = req.body;
                const updateStatus = await brandModel.updateOne({id}, updated);
                if(updateStatus.modifiedCount>0){
                    return res.send("Brand details updated successfully.")
                }
                return res.send("Could't update details or already been updated");

           }
           else if(req.method==="DELETE"){
               if(loggedUser?.role==="Seller"){
                   return res.send("Kindly contact Admin for further process.");
                }
                let { id } = req.body;
                const deleteStatus = await brandModel.deleteOne({id});
                if(deleteStatus.deletedCount>0){
                    return res.send("Brand details deleted successfully.")
                }
                return res.send("Could't delete details or already been deleted");

           }
    }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

