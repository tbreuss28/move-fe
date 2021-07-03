import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { AppLayout } from "@layouts";
import { Auth } from "@providers";

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

function App ({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Auth.Provider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Auth.Provider>
    </ChakraProvider>
  );
}

export default App;
