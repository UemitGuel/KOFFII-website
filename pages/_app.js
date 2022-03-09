import { ChakraProvider, Box } from "@chakra-ui/react";
import MobileNavigation from "../components/mobileNavigation";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>This page has a title 🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
        <Component {...pageProps} />
      </Box>
      <MobileNavigation />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
