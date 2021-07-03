import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
