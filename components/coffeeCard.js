import {
  Box,
  useColorModeValue,
  Text,
  Heading,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import FeatureView from "./featureView";

const CoffeeCard = ({ name, hood, features }) => {
  return (
    <Box
      transition="all 0.3s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      maxW={"450px"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text
          color={"green.700"}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {hood}
        </Text>
        <Heading
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {name}
        </Heading>
        <Spacer />
        <FeatureView features={features} />
      </Stack>
    </Box>
  );
};

export default CoffeeCard;
