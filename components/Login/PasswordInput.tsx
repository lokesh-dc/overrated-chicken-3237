import { useState } from "react"

import { InputGroup,Input, InputRightElement, Button,   } from "@chakra-ui/react"

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"

export default function PasswordInput({handleChange}:any) {

    const [show, setShow] = useState(false);

    function handleClick(){
        setShow(!show);
    }

    return(
        <InputGroup size='md' color="black">
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Enter password'
                onChange={handleChange}
            />
            <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={handleClick} bgColor="transparent">
                    {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill /> }
                    {/* {show ? "hide" : "show" } */}
                </Button>
            </InputRightElement>
    </InputGroup>
    )
}