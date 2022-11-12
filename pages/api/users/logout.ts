import {serialize} from 'cookie'

export default async (req:any, res:any) => {
    try{
        if(req.method == "GET"){
            const serialised = serialize("mohallaMartJwt", "abc", {
                httpOnly: true,
                secure: "development" !== "development",
                sameSite: "strict",
                maxAge: 0, //12hours
                path: "/",
              });

            res.setHeader("Set-Cookie", serialised);
            res.send(serialised)
        }
    }
    catch(e){
        console.log(e)
    }
}