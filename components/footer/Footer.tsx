import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <Flex
      as="footer"
      position="fixed"
      top={"calc(100% - 8rem)"}
      left={"50%"}
      transform="translateX(-50%)"
      justifyContent="center"
      alignItems="center"
      p={8}
      zIndex={1}
      h={32}
      width="100%"
    >
      {children}
    </Flex>
  );
};

export default Footer;
