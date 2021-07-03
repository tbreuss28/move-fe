import { Flex, FlexProps } from "@chakra-ui/react";

const Main = ({ children, p }: FlexProps) => {
  return (
    <Flex direction="column" flex="1" p={p != null ? p : 4}>
      {children}
    </Flex>
  );
};

export default Main;
