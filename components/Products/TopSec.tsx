import { ChevronDownIcon, ChevronUpIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Divider, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightAddon, InputRightElement, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, VStack } from '@chakra-ui/react'
import React, { useState , useRef} from 'react'
import { FiCrosshair } from 'react-icons/fi'
// import MidMenu from '../../../Components/Navbar/DeskNav/MidSec/MidMenu'
// import { Button } from 'semantic-ui-react'

const TopSec = ({handleSearch}:any) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const queryRef:any = useRef<any>(null)

    const [menuItem, setMenuItem] = useState('All Departments')
  return (
    // <VStack w='100%' h='100px' bg='orange' align='center' justify='center' zIndex='2'>

        <HStack display={{base:'none', sm:'flex'}} size='md' w={{base:'80%', md:'50%'}} borderRadius='md' py={{base:3, md:2}} px={5}  boxShadow='lg'
        bgColor='rgba(255, 255, 255, .65)' style={{backdropFilter: 'blur(5px)'}} _hover={{bgColor:'rgba(255, 255, 255, .95)'}}
        >

            <Box w='30px' >
                <SearchIcon cursor='pointer' onClick={() => handleSearch(queryRef.current.value)} color='gray' fontSize='20px'/>
            </Box>

            <Input
                px={4}
                // bg='white'
                ref={queryRef}
                fontSize='18px'
                placeholder='Search Products...'
                variant='unstyled'
            />

            {/* <CloseIcon w={2} h={3} bg="gray.50" borderRadius='full' onClick={handleClick}/> */}

            <Center h='20px' bg='gray' display={{base:'none', md:'block'}}>
                <Divider orientation='vertical'/>
            </Center>

            <Box display={{base:'none', md:'block'}} >

                <Menu closeOnSelect={true} 
                isLazy
                >
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
                    <MenuList minWidth='240px' overflowY='scroll' h='300px' >
                            <MenuOptionGroup type='radio' onChange={(e) => setMenuItem(e.toUpperCase())} zIndex='100'>
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

    // {/* </VStack> */}
  )
}

export default TopSec