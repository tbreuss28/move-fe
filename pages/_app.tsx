import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { Layout } from "../layouts";

const colors = {
  brand: "#BDDD0E",
  primary: "#4E77E7",
  secondary: "#4A9EE4",
  tertiary: "#182547",
  dark: "#232C33",
  light: "#F5F5F5",
};

const theme = extendTheme({
  colors,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
