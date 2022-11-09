import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Divider, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiCrosshair } from 'react-icons/fi'
import MidMenu from '../../../Components/Navbar/DeskNav/MidSec/MidMenu'
// import { Button } from 'semantic-ui-react'

const TopSec = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [menuItem, setMenuItem] = useState('All Departments')
  return (
    <VStack w='100%' h='100px' mt='100px' bg='orange' align='center' justify='center' >

        <HStack size='md' w='50%' bg="white" borderRadius='md' py={3} px={5} mt='100px' boxShadow='2xl'>

            <Box w='30px' >
                <SearchIcon color='gray' fontSize='20px'/>
            </Box>

            <Input
                px={4}
                bg='white'
                fontSize='18px'
                placeholder='Search Products...'
                variant='unstyled'
            />

            <CloseIcon w={2} h={3} bg="gray.50" borderRadius='full' onClick={handleClick}/>

            <Center h='20px' bg='gray'>
                <Divider orientation='vertical'/>
            </Center>

            <Box >

                <Menu closeOnSelect={true} border='1px solid green' >
                    {({ isOpen }) => (
                        <>
                    <MenuButton as={Button} 
                        isActive={isOpen}
                        colorScheme='white' 
                        color='blackAlpha.700'
                        rightIcon={ !isOpen ? <ChevronDownIcon /> : <ChevronUpIcon/>}
                        fontSize='14px'
                        >
                        {menuItem}
                    </MenuButton>
                    <MenuList minWidth='240px' overflowY='scroll' h='300px'>
                            <MenuOptionGroup type='radio' onChange={(e) => setMenuItem(e.toUpperCase())}>
                                <MenuItemOption value='All Departments'>All Departments</MenuItemOption>
                                <MenuItemOption value='phone'>Auto</MenuItemOption>
                                <MenuItemOption value='baby'>Baby</MenuItemOption>
                                <MenuItemOption value='beauty'>Beauty</MenuItemOption>
                                <MenuItemOption value='books'>Books</MenuItemOption>
                                <MenuItemOption value='business'>Business</MenuItemOption>
                                <MenuItemOption value='clothes'>Clothes</MenuItemOption>
                                <MenuItemOption value='collectibles'>Collectibles</MenuItemOption>
                                <MenuItemOption value='computers'>Computers</MenuItemOption>
                                <MenuItemOption value='crafts'>Crafts</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </>
                    )}
                </Menu>
            </Box>


        </HStack>

    </VStack>
  )
}

export default TopSec