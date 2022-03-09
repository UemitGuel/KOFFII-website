import { ChakraProvider, Box } from "@chakra-ui/react";
import MobileNavigation from "../components/mobileNavigation";
import Header from "../components/header";
import Footer from "../components/footer";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <head>
        <title>Title</title>
        <meta property="og:image" content="https://images.unsplash.com/photo-1640622307985-eaa37b36077f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      </head>
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
