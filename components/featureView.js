import { React } from "react";
import {
  Box,
  Spacer,
  Center,
  useColorModeValue,
  Tag,
  TagLabel,
  TagRightIcon,
  SimpleGrid
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

const FeatureView = ({ features }) => {
  const opacity = 0.2;
  const sizeDontHasFeature = 20;

  return (
    <SimpleGrid columns={2} spacing={4}>
      <Box>
      {features.includes("hasWifi") ? (
        <Tag size={"lg"} key={"wifi"} variant="outline" color={"white"} w='100%' >
          <Spacer />
          <TagLabel>WIFI</TagLabel>
          <TagRightIcon as={MdWifi} />
          <Spacer />
        </Tag>
      ) : (
        <Center>
          <MdWifiOff opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      </Box>
      <Box w='100%'>
      {features.includes("hasFood") ? (
        <Tag size={"lg"} key={"wifi"} variant="outline" color={"white"} w='100%'>
          <Spacer />
        <TagLabel>LUNCH</TagLabel>
        <TagRightIcon as={MdLocalDining} />
        <Spacer />
      </Tag>
      ) : (
        <Center>
          <MdNoMeals opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      </Box>
      <Box>
      {features.includes("hasVegan") ? (
        <Tag size={"lg"} key={"wifi"} variant="outline" color={"white"} w='100%' >
          <Spacer />
        <TagLabel>VEGAN</TagLabel>
        <TagRightIcon as={MdLocalFlorist} />
        <Spacer />
      </Tag>
      ) : (
        <Center>
          <MdLocalFlorist opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      </Box>
      <Box>
      {features.includes("hasPlug") ? (
        <Tag size={"lg"} key={"wifi"} variant="outline" color={"white"} w='100%' >
          <Spacer />
        <TagLabel>STROM</TagLabel>
        <TagRightIcon as={MdPower} />
        <Spacer />
      </Tag>
      ) : (
        <Center>
          <MdPowerOff opacity={opacity} size={sizeDontHasFeature} />
        </Center>
      )}
      </Box>
    </SimpleGrid>
  );
};

export default FeatureView;
