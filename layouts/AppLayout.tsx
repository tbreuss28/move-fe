import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateColumns="1fr"
      templateRows={"5rem 1fr 5rem"}
      templateAreas={`'header' 'main' 'footer'`}
      bgGradient="linear(to-t, primary.400, secondary.200)"
      height="100vh"
      overflow="hidden"
    >
      {children}
    </Grid>
  );
};

export default Layout;
