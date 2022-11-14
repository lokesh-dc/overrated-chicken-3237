import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React from 'react'

export function EditModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    // const finalRef = React.useRef(null)
  
    return (
      <>
        <Button colorScheme='orange' onClick={onOpen}>Edit</Button>
        <Modal
          initialFocusRef={initialRef}
        //   finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>New Product Name</FormLabel>
                <Input ref={initialRef} placeholder='Name' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Updated Price</FormLabel>
                <Input placeholder='New Price..' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }