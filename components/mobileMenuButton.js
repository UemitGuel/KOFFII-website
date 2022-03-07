import React from "react";
import { Button, Text, useColorModeValue, Icon } from "@chakra-ui/react";

const MobileMenuButton = ({ label, icon, ...rest }) => {
  return (
    <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
    Settings
  </Button>
  );
};

export default MobileMenuButton;