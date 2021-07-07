import Document, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

const GOOGLE_MAPS_API_KEY = "AIzaSyBt76jCSsN2z52-QKicoWFCuRG7UDVSe8U";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="https://use.typekit.net/bom4zgc.css" />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
