import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    MdCoffee,
    MdInfo,
    MdMenu
} from 'react-icons/md'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    const [activeTabs, setActiveTabs] = useState({
        firstTab: true,
        secondTab: false
    })

    //Todo, implement in one function
    function activateFirstTab() {
        console.log(activeTabs)
        setActiveTabs({
            firstTab: true,
            secondTab: false
        })
    }

    function activateSecondTab() {
        console.log(activeTabs)

        setActiveTabs({
            firstTab: false,
            secondTab: true
        })
    }

    return (
        <Flex
            pos="sticky"
            left="5"
            h="28vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<MdMenu />}
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem 
                    key='firstTab' 
                    onClick={activateFirstTab} 
                    navSize={navSize} 
                    icon={MdCoffee} 
                    title="Cafés" 
                    active={activeTabs.firstTab} />
                <NavItem 
                    key='secondTab' 
                    onClick={activateSecondTab} 
                    navSize={navSize} 
                    icon={MdInfo} 
                    title="Gut zu wissen"
                    active={activeTabs.secondTab}  />
            </Flex>
        </Flex>
    )
}