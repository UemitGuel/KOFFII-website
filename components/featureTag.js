import React from "react";
import { Box, Tag, WrapItem } from "@chakra-ui/react";
import {
    MdWifi,
    MdWifiOff,
    MdLocalDining,
    MdNoMeals,
    MdLocalFlorist,
    MdPower,
    MdPowerOff,
  } from "react-icons/md";

const FeatureTag = ({ name }) => {
  return (
    <WrapItem>
      <Tag
        size="lg"
        variant="subtle"
        rounded="lg"
      >
        {name}
      </Tag>
      <MdWifiOff />
    </WrapItem>
  );
};

export default FeatureTag;