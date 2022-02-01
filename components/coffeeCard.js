import { Box, useColorModeValue, Image, Text, Heading, Stack } from '@chakra-ui/react';
import { features } from 'process';
import React from "react";

const CoffeeCard = ({ name, hood, notes }) => {
    console.log(name)
    console.log(hood)
    return (
        <Box maxW={'445px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
            <Image
                src={
                'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
                layout={'fill'}
            />
            </Box>
            <Stack>
            <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}>
                {hood}
            </Text>
            <Heading
                color={useColorModeValue('gray.700', 'white')}
                fontSize={'2xl'}
                fontFamily={'body'}>
                {name}
            </Heading>
            {/* {notes && <Text color={'gray.500'}> {notes} </Text> } */}
        </Stack>
        </Box>
    )
};

export default CoffeeCard;