import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AppNavigation = () => {
  return (
    <Flex as="nav" justifyContent="space-evenly" alignItems="center">
      <IconButton h={12} w={12} aria-label="New Move" background="brand">
        <AddIcon color="white" h={5} w={6} />
      </IconButton>
    </Flex>
  );
};

export default AppNavigation;
