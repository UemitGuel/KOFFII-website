import { Box, useColorModeValue, Image, Text, Heading, Stack, AspectRatio, Flex, Spacer } from '@chakra-ui/react';
import React from "react";
import FeatureView from './featureView';

const InSpotlightCard = ({ name, hood, note, noteHeadline, src, features }) => {
    return (
        <Box 
            transition="all 0.3s"
            transition-timing-function="spring(1 100 10 10)"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
            maxW={'450px'}
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
                        color={'green.700'}
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
                    <Text color={'gray.500'} noOfLines={5}> {note} </Text>
                    <Spacer />
                    <FeatureView features={features}/>
            </Stack>
        </Box>
    )
};

export default InSpotlightCard;