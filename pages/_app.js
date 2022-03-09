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
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>KOFFII Cologne - Finde dein Cafè zum arbeiten</title>
        <link rel="icon" type="image/png" sizes="96x96" href="/appIcon.png" />
        <meta name="theme-color" content="#2BB0EC" />
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
