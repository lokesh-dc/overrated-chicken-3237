
import { connect } from "../../../lib/dbConnect";
import user from "../../../models/users.model";

export default async (req:any, res:any) => {
    try {
        await connect();
        let users = await user.find({}, {password: 0})
        return res.json(users)
    } catch (e:any) {
        console.error(e);
        res.status(500).send(e.message);
    }
};

