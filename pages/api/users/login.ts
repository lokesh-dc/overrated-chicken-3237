import clientPromise from "../../../lib/mongodb";

const jwt = require("jsonwebtoken");

export default async (req:any, res:any) => {
    try {
        const client = await clientPromise;
        const db = client.db("Mart");
        if(req.method === "POST"){
            const { email, password} = req.body;
            const user = await db.collection("users").findOne({email})
            if(user){
                let userCheck = await db.collection("users").findOne({ email, password});
                if(userCheck){
                    let id = userCheck._id;
                        // let token = jwt.sign({email, id},"vdvhsvdsvcdcvsdvcvkc");
                        // res.send(token)  
                    res.send(id)
            }else{
                res.send("not found")
            }
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

