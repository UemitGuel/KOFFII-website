import React from "react";
import { Box, Text } from '@chakra-ui/react';

const FeatureView = ({ features }) => {
    return (
        <Box>
            {features.includes('hasWifi') ? <Text>Yes</Text> : <Text>NO</Text> }
        </Box>
    )
}

export default FeatureView;
