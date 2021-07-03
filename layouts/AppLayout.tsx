import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex bg="primary" color="light" direction="column" height="100vh">
      {children}
    </Flex>
  );
};

export default Layout;
