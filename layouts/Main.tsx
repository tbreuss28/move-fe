import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Flex direction="column" flex="1" p={4}>
      {children}
    </Flex>
  );
};

export default Main;
