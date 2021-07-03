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
      gridArea="footer"
      justifyContent="center"
      alignItems="center"
      p={8}
      zIndex={1}
    >
      {children}
    </Flex>
  );
};

export default Footer;
