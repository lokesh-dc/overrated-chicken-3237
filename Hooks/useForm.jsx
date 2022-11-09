import { useState } from "react";


export default function useForm() {
    const [creds, setState] = useState({
        email: "",
        password : "",
        mobile : 0,
        firstName : "",
        lastName : ""
    })


    function execute(name, value) {
        if(name){
            setState({
                ...creds,
                [name] : value
            })
    }}

    return { creds, execute};
}