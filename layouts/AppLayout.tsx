import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows={"5rem auto 5rem"}
      templateAreas={`'header' 'main' 'footer'`}
      bgGradient="linear(to-br, primary, secondary)"
      height="100vh"
    >
      {children}
    </Grid>
  );
};

export default Layout;
