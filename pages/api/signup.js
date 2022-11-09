import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("Mart");
        if(req.method === "POST"){
            const { firstName, lastName, mobile, email, password} = req.body;

            const user = await db.collection("users").findOne({email})
            console.log(user)
            if(user){
                return res.status(401).send("Email Id exists")
            }else{
                await db.collection("users").insertOne({firstName, lastName, email, password, mobile});
                res.send("User created")
            }
        }else{
            const users = await db.collection("users").find().toArray();
            res.json(users);
        }
    } catch (e) {
        console.error(e);
    }

};

