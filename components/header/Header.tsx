import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { Logo } from "@components";

interface HeaderProps {
  close?: boolean;
}

const Header = ({ close = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <Flex justifyContent="space-between" align="center" px={8}>
      <Logo />
      {close ? (
        <IconButton
          aria-label="Close"
          onClick={() => router.back()}
          variant="ghost"
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
