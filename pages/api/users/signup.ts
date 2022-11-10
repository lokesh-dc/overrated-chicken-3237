import clientPromise from "../../../lib/mongodb";

export default async (req:any, res:any) => {
    try {
        const client = await clientPromise;
        const db = client.db("Mart");
        if(req.method === "POST"){
            const { firstName, lastName, mobile, email, password} = req.body;

            const user = await db.collection("users").findOne({email})
            if(user){
                return res.status(401).send("Email Id exists")
            }else{
                await db.collection("users").insertOne({firstName, lastName, email, password, mobile});
                res.send("User created")
            }
        }
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

