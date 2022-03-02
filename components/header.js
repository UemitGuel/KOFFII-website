import React from "react";
import {
  chakra,
  VStack,
  HStack,
  Button,
  IconButton,
  useColorMode,
  Text,
  Box,
  Divider,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuCommand,
  MenuDivider,
  Icon,
  Avatar,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Container from "./container";
import { useRouter } from "next/router";
import ThemeToggle from "./themeToggle";
import Link from "next/link";

function NavLink(props) {
  const { href, name, ...rest } = props;
  var isActive = false;
  const { pathname } = useRouter();

  if (href !== "/") {
    const [, group] = href.split("/");

    isActive = pathname.includes(group);
  } else {
    if (href === pathname) {
      isActive = true;
    }
  }

  return (
    <NextLink href={href} passHref>
      <Button
        aria-current={isActive ? "page" : undefined}
        variant="ghost"
        size="md"
        {...rest}
        _activeLink={{
          bg: useColorModeValue("gray.100", "gray.700"),
        }}
        _hover={{
          bg: useColorModeValue("gray.50", "gray.700"),
        }}
        px={4}
      >
        {name}
      </Button>
    </NextLink>
  );
}

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      display={{ base: "none", md: "block" }}
      position="fixed"
      w="100%"
      zIndex={99}
      borderBottomWidth="2px"
      shadow="0 0 10px 0 rgba(0,0,0, 0.035);"
    >
      <Container maxW={"container.xl"}>
        <VStack align="start" spacing={0}>
          <HStack justify="space-between" w="100%" h={16}>
            <Link href="/">
              <Avatar
                name="KOFFII"
                size="sm"
                src="/appIcon.png"
                cursor="pointer"
              />
            </Link>
            <HStack ml={-4} spacing={2}>
              <NavLink href="/" name="Cafés" />
              <NavLink href="/preparation" name="Zubereitung" />
              <Menu isOpen={isOpen}>
                <MenuButton
                  onMouseEnter={onOpen}
                  onMouseLeave={onClose}
                  rounded="full"
                ></MenuButton>
              </Menu>
            </HStack>
            <HStack>
              <ThemeToggle />
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default Header;
