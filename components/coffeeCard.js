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
import MiniFeatureView from "./miniFeatureView";

const CoffeeCard = ({ name, hood, features }) => {
  return (
    <Box
      transition="all 0.3s"
      transition-timing-function="spring(1 100 10 10)"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
      bg={useColorModeValue('neutral.100', 'neutralD.100')}
      boxShadow={"2xl"}
      rounded={"md"}
      maxW={'350'}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Text
          color={useColorModeValue('neutral.900', 'neutralD.900')}
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
        <MiniFeatureView features={features} />
      </Stack>
    </Box>
  );
};

export default CoffeeCard;
