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
        <meta property="og:title" content="Ümit Gül" />
        <meta property="og:description" content="Finde dein Cafè in Köln zum arbeiten" />
        <meta property="og:url" content="https://www.koffii.xyz" />
        <meta property="og:type" content="website" />
        <meta name="apple-itunes-app" content="app-id=1462659665"></meta>
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
