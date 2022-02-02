import { Box, useColorModeValue, Image, Text, Heading, Stack, AspectRatio } from '@chakra-ui/react';
import React from "react";

const CoffeeCard = ({ name, hood, note, noteHeadline, src }) => {
    console.log(src)
    return (
        <Box 
            maxW={'400px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'md'}
            p={6}
            overflow={'hidden'}>
            <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}>
            <AspectRatio>
                <Image
                    src={src}
                    layout={'fill'}
                />
            </AspectRatio>
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
                {name} - {noteHeadline}
            </Heading>
            <Text color={'gray.500'}> {note} </Text>
        </Stack>
        </Box>
    )
};

export default CoffeeCard;