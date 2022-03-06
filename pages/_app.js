import { ChakraProvider, Box } from "@chakra-ui/react";
import MobileNavigation from "../components/mobileNavigation";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
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
