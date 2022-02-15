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
    MdArrowBackIos,
    MdMenu
} from 'react-icons/md'
import { IoPawOutline } from 'react-icons/io5'
import NavItem from '../components/NavItem'
import { useRouter } from 'next/router'


export default function DetailSidebar({navSize, toggleState}) {
    const router = useRouter()

    return (
        <Flex
            pos="sticky"
            left="5"
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
                    onClick={toggleState}
                />
                <NavItem 
                    key='back' 
                    onClick={() => router.back()}
                    navSize={navSize} 
                    icon={MdArrowBackIos} 
                    title="Zurück" 
                    active={false} />
            </Flex>
        </Flex>
    )
}