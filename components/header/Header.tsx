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
    <Flex justifyContent="space-between" align="center" height={28} px={8}>
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
