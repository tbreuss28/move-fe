import { ArrowBackIcon } from "@chakra-ui/icons";
import { Avatar, Flex, Spacer } from "@chakra-ui/react";
import Link, { LinkProps } from "next/link";

interface HeaderProps {
  backLink?: LinkProps;
}

const Header = ({ backLink }: HeaderProps) => {
  return (
    <Flex align="center" bg="secondary" height={16} pl={4} pr={4}>
      {backLink && (
        <Link {...backLink}>
          <a>
            <ArrowBackIcon w={6} h={6} />
          </a>
        </Link>
      )}
      <Spacer />
      <Avatar />
    </Flex>
  );
};

export default Header;
