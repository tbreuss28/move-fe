import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
  background?: string;
}

const Footer = ({ children, background = "primary" }: FooterProps) => {
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
      background={background}
    >
      {children}
    </Flex>
  );
};

export default Footer;
