import { Box, useColorModeValue, Image, Text, Heading, Stack } from '@chakra-ui/react';
import React from "react";

const CoffeeCard = ({ name, hood, notes, src }) => {
    console.log(src)
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
                src={src}
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