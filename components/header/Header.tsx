import { useState, useRef, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Flex, IconButton, Input, useOutsideClick } from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

import { Search } from "@providers";
import { Logo } from "@components";

interface HeaderProps {
  icon?: "close" | "search";
  color?: "white" | "primary";
}

const Header = ({ icon, color = "white" }: HeaderProps) => {
  const router = useRouter();
  const { setSearchTerm, resetSearchTerm } = useContext(Search.Context);
  const [searchActive, setSearchActive] = useState(false);
  const ref = useRef(null);

  useOutsideClick({ ref: ref, handler: () => setSearchActive(false) });

  useEffect(() => {
    if (searchActive === false) {
      resetSearchTerm();
    }
  }, [searchActive, resetSearchTerm]);
  return (
    <Flex
      as="header"
      gridArea="header"
      justifyContent="space-between"
      align="center"
      px={8}
      zIndex={1}
      color={color}
    >
      <Logo />
      <>
        {icon === "close" && (
          <IconButton
            aria-label="Close"
            onClick={() => router.back()}
            variant="ghost"
          >
            <CloseIcon w={6} h={6} />
          </IconButton>
        )}

        {icon === "search" && (
          <Flex ref={ref}>
            {searchActive && (
              <Input
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                placeholder="Suche..."
                variant="outlined"
                mr={4}
              />
            )}
            <IconButton
              aria-label="Toggle Search"
              onClick={() => setSearchActive(!searchActive)}
            >
              <SearchIcon w={6} h={6} />
            </IconButton>
          </Flex>
        )}
      </>
    </Flex>
  );
};

export default Header;
