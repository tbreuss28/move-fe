import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { Logo } from "@components";
import { useRouter } from "next/router";

interface HeaderProps {
  close?: boolean;
}

const Header = ({ close = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <Flex
      as="header"
      gridArea="header"
      justifyContent="space-between"
      align="center"
      px={8}
      zIndex={1}
      color={close ? "white" : "primary"}
    >
      <Logo />
      {close ? (
        <IconButton
          aria-label="Close"
          onClick={() => router.back()}
          variant="ghost"
          _hover={{
            bg: "primary",
          }}
        >
          <CloseIcon w={6} h={6} />
        </IconButton>
      ) : (
        <SearchIcon w={6} h={6} />
      )}
    </Flex>
  );
};

export default Header;
