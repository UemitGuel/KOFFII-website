import React from "react";
import {
  Box,
  Spacer,
  HStack,
  IconButton,
  useColorModeValue,
  Button,
  VStack,
} from "@chakra-ui/react";
import { MdWifi, MdLocalDining } from "react-icons/md";
import { motion, useCycle } from "framer-motion";
import MobileMenuButton from "./mobileMenuButton";
import Link from "next/link";
import ThemeToggle from "./themeToggle";

const MobileNavigation = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const links = [
    {
      route: `/`,
      title: `Home`,
    },
    {
      route: `/zubereitung`,
      title: `Zubereitung`,
    },
  ];

  const menuvariants = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  };

  const navvariants = {
    open: {
      transition: { staggerChildren: 0.15, delayChildren: 0.25 },
    },
    closed: {},
  };

  const MotionBox = motion(Box);
  const MotionVStack = motion(VStack);

  return (
    <MotionBox
      initial={false}
      animate={isOpen ? "open" : "closed"}
      position="fixed"
      bottom="0"
      right="0"
      left="0"
      display={{ base: "block", md: "none" }}
      backgroundColor={useColorModeValue("neutral.100", "neutralD.100")}
    >
      <HStack
        justify="space-around"
        align="center"
        py={2}
        mt="auto"
        height={16}
        borderTopWidth="2px"
        shadow="0 -2px 10px 0 rgba(0,0,0, 0.035);"
        px={4}
      >
          <Link href="/" px={6}>
            <Button variant="outline">Cafés</Button>
          </Link>
          <Link href="/preparation" px={6}>
            <Button variant="outline">Zubereitung& mehr</Button>
          </Link>
          <Spacer/>
        <ThemeToggle/>
      </HStack>
    </MotionBox>
  );
};

export default MobileNavigation;
