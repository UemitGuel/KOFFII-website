import { React } from "react";
import {
  Box,
  Spacer,
  Center,
  useColorModeValue,
  Tag,
  Flex,
  TagLabel,
  TagRightIcon,
  SimpleGrid,
  HStack,
  StackDivider,
  Icon
} from "@chakra-ui/react";
import {
  MdWifi,
  MdWifiOff,
  MdLocalDining,
  MdNoMeals,
  MdLocalFlorist,
  MdPower,
  MdPowerOff,
} from "react-icons/md";
import FeatureTag from "./featureTag";

const MiniFeatureView = ({ features }) => {
  const opacity = 0.2;
  const sizeDontHasFeature = 20;

  return (
    <HStack divider={<StackDivider borderColor='gray.200'/>} w={'100%'} justify={'space-between'}>
      {features.includes("hasWifi") ? (
                  <Center>
        <Icon as={MdWifi} w={5} h={5}/>
        </Center>

      ) : (
        <Center>
          <MdWifiOff opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      {features.includes("hasFood") ? (
                            <Center>

        <Icon as={MdLocalDining} w={5} h={5}/>
        </Center>

      ) : (
        <Center>
          <MdNoMeals opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      {features.includes("hasVegan") ? (
        <Icon as={MdLocalFlorist} w={5} h={5}/>
      ) : (
        <Center>
          <MdLocalFlorist opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      {features.includes("hasPlug") ? (
        <Icon as={MdPower} w={5} h={5}/>
      ) : (
        <Center>
          <MdPowerOff opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
    </HStack>
  );
};

export default MiniFeatureView;
