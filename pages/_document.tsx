import Document, { Head, Html, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

const GOOGLE_MAPS_API_KEY = "AIzaSyBt76jCSsN2z52-QKicoWFCuRG7UDVSe8U";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Move Now</title>
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          />
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
