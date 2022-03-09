import React from "react";
import {
  HStack,
  Button,
  StackDivider,
  Spacer,
  useColorModeValue,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Container from "../components/container";
import NextLink from "next/link";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";
import Link from "./link";

const Footer = () => {
  const date = new Date().getFullYear();

  function FooterLink(props) {
    const { href, name, ...rest } = props;

    return (
      <NextLink href={href} passHref>
        <Button
          variant="unstyled"
          {...rest}
          _hover={{ color: useColorModeValue("gray.500", "gray.400") }}
        >
          {name}
        </Button>
      </NextLink>
    );
  }

  return (
    <Container maxW="container.xl">
      <HStack
        justify="space-between"
        w="100%"
        display={{ base: "none", md: "flex" }}
        my={8}
      >
        <HStack divider={<StackDivider borderColor='gray.200'/>}>
        <FooterLink href="mailto:uemitgul@gmail.com" name="Kontakt" />
        <FooterLink href="/impressum" name="Impressum" />
        <FooterLink href="/datenschutz" name="Datenschutz" />
        </HStack>
        <Spacer />
        <HStack spacing={4}>
          <Link href="https://twitter.com/uemit_eth" isExternal unstyled>
            <IconButton
              size="sm"
              icon={<Icon as={TwitterLogo} weight="fill" />}
            ></IconButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/%C3%BCmit-g%C3%BCl-b72211bb/"
            isExternal
            unstyled
          >
            <IconButton
              size="sm"
              icon={<LinkedinLogo weight="fill" />}
            ></IconButton>
          </Link>
          <Link
            href="https://github.com/UemitGuel/KOFFII-website"
            isExternal
            unstyled
          >
            <IconButton
              size="sm"
              icon={<GithubLogo weight="fill" />}
            ></IconButton>
          </Link>
        </HStack>
        <Spacer />
        <FooterLink
          href="https://apps.apple.com/de/app/koffii-cologne/id1462659665"
          name="iOS App"
        />
      </HStack>
    </Container>
  );
};
export default Footer;
