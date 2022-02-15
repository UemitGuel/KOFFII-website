import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import { MdWifi, MdLocalDining, MdLocalFlorist, MdPower} from "react-icons/md";
import LegendItem from './legendItem'


export default function LegendSidebar({navSize}) {
    console.log(navSize)

    return (
        <Flex
            pos="sticky"
            left="5"
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
                {navSize != "small" &&
                <Flex 
                    mt={30}
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    px={4}
                  >
                    <Heading size='md'>Legende</Heading>
                    <Divider />
                  </Flex>
                  }
                <LegendItem 
                    key='hasWifi' 
                    navSize={navSize} 
                    icon={MdWifi} 
                    title="Wifi" />
                <LegendItem 
                    key='hasFood' 
                    navSize={navSize} 
                    icon={MdLocalDining} 
                    title="Essen" />
                <LegendItem 
                    key='hasVegan' 
                    navSize={navSize} 
                    icon={MdLocalFlorist} 
                    title="Veganes" 
                    />
                <LegendItem 
                    key='hasPlug' 
                    navSize={navSize} 
                    icon={MdPower} 
                    title="Steckdose" />              
            </Flex>
        </Flex>
    )
}