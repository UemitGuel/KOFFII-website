import React from "react";
import { VStack, Text, useColorModeValue, Icon } from "@chakra-ui/react";

const MobileMenuButton = ({ label, icon, ...rest }) => {
  return (
    <VStack
      as="button"
      spacing={0}
      rounded="md"
      px={6}
      {...rest}
    >
      <Icon>{icon}</Icon>

      <Text
        fontSize="xs"
        fontWeight="500"
      >
        {label}
      </Text>
    </VStack>
  );
};

export default MobileMenuButton;