import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: '#BDDD0E',
  primary: '#4E77E7',
  secondary: '#4A9EE4',
  tertiary: '#182547',
  dark: '#232C33',
  light: '#F5F5F5'
};

const theme = extendTheme({
  colors,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
