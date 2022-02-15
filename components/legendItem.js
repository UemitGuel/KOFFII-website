import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'

export default function LegendItem({ icon, title, description, navSize}) {
    return (
        <Flex 
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Flex
                p={3}
                borderRadius={8}
                w={navSize == "large" && "100%"}>
                <Icon as={icon} fontSize="xl" color={"gray.500"} />
                <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
        </Flex>
    )
}