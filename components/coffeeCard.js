import { Box } from '@chakra-ui/react';
import React from "react";

const CoffeeCard = ({ name, hood }) => {
    console.log(name)
    console.log(hood)
    return (
        <Box bg='tomato' w='100%' p={4} color='white'>
            {name} {hood}
        </Box>
    )
};

export default CoffeeCard;