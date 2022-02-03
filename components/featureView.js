import React from "react";
import { Flex, Spacer, Center } from '@chakra-ui/react';
import { MdWifi, MdWifiOff, MdLocalDining, MdNoMeals, MdLocalFlorist, MdPower, MdPowerOff  } from "react-icons/md";

const FeatureView = ({ features }) => {
    const opacity = 0.2
    const sizehasFeature = 30
    const sizeDontHasFeature = 20

    return (
        <Flex>
            <Spacer />
            {features.includes('hasWifi') ? 
                <Center><MdWifi size={sizehasFeature}/></Center> :
                <Center><MdWifiOff opacity={opacity} size={sizeDontHasFeature}/></Center>
            }
            <Spacer />
            {features.includes('hasFood') ? 
                <Center><MdLocalDining size={sizehasFeature}/></Center> : 
                <Center><MdNoMeals opacity={opacity} size={sizeDontHasFeature}/></Center>
            }
            <Spacer />
            {features.includes('hasVegan') ? 
                <Center><MdLocalFlorist size={sizehasFeature}/></Center> : 
                <Center><MdLocalFlorist opacity={opacity} size={sizeDontHasFeature}/></Center>
            }
            <Spacer />
            {features.includes('hasPlug') ? 
                <Center><MdPower size={sizehasFeature}/></Center> : 
                <Center><MdPowerOff opacity={opacity} size={sizeDontHasFeature}/></Center>
            }
            <Spacer />
        </Flex>
    )
}

export default FeatureView;
