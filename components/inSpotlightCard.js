import { Box, useColorModeValue, Image, Text, Heading, Stack, AspectRatio, Flex, Spacer } from '@chakra-ui/react';
import React from "react";
import FeatureView from './featureView';

const InSpotlightCard = ({ name, hood, note, noteHeadline, src, features }) => {
    return (
        <Box 
            transition="all 0.3s"
            transition-timing-function="spring(1 100 10 10)"
            _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
            bg={useColorModeValue('neutral.100', 'neutralD.100')}
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
                    <Stack spacing={1}>
                    <Text
                        color={useColorModeValue('neutral.900', 'neutralD.900')}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {hood}
                    </Text>
                    <Heading
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {name} - {noteHeadline}
                    </Heading>
                    </Stack>
                    <Text noOfLines={5}> {note} </Text>
                    <Spacer />
                    <FeatureView features={features}/>
            </Stack>
        </Box>
    )
};

export default InSpotlightCard;