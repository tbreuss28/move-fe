import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { AppLayout } from "@layouts";
import { Auth, Search } from "@providers";

const colors = {
  brand: {
    100: "#DCF452",
    200: "#D8F33F",
    300: "#D4F22C",
    400: "#D0F019",
    500: "#BDDD0E",
    600: "#B5D30D",
    700: "#A5C00C",
    800: "#94AD08",
    900: "#84900A",
  },
  primary: {
    100: "#23A8FB",
    200: "#0FA0FA",
    300: "#0596F0",
    400: "#0489DC",
    500: "#0477BF",
    600: "#0470B4",
    700: "#0364A0",
    800: "#03578C",
    900: "#024B78",
  },
  secondary: {
    100: "#37D7FB",
    200: "#23D3FB",
    300: "#0FCFFA",
    400: "#05C5F0",
    500: "#04B2D9",
    600: "#04A4C8",
    700: "#0494B4",
    800: "#0383A0",
    900: "#03738C",
  },
};

const fonts = {
  heading: "sofia-pro-soft, sans-serif",
  body: "sofia-pro, sans-serif",
};

const theme = extendTheme({
  colors,
  fonts,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Auth.Provider>
        <Search.Provider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Search.Provider>
      </Auth.Provider>
    </ChakraProvider>
  );
}

export default App;
