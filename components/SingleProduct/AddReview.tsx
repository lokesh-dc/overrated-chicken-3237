import { Box, Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import axios from "axios"
import React, { useState , useEffect } from "react"
import { BsStarFill } from "react-icons/bs"
import {GoPlus} from "react-icons/go"

export function AddReview({handleSubmitReview}:any) {  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)
    const [fillStar , setFillStar] = useState(Number)
    const [rating,setRating] = useState("")

    const handleChange =(e:any)=>{
      setRating(e.target.value)
    }

    const submitReview = ()=>{
      handleSubmitReview(rating,fillStar)
      onClose()
    }
    useEffect(()=>{

    },[fillStar])
        
    return (
      <>
        <Button
          ml='4'
          colorScheme="blue"
          marginTop={"30px"}
          onClick={() => {
            setOverlay(<OverlayTwo />)
            onOpen()
          }}
        >
          Add Your Review <GoPlus style={{marginLeft:"10px"}}/>
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>Your Review Matters To Us!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Box display={"flex"} gap="10px" justifyContent={"center"} marginBottom="20px">
                {Array(5).fill("").map((_, i) => {
                  return <BsStarFill key={i} fontSize="30px" cursor="pointer" color={i < fillStar ? "orange" : "gray"} onClick={()=>(setFillStar(i+1))}/>
                  })}
                </Box>
                <Input type="text" placeholder="Enter Your Review" onChange={handleChange} />
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3}  onClick={submitReview}>
                Post
                </Button>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
