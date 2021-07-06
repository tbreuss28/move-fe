import { Button, Flex } from "@chakra-ui/react";

import { Main } from "@layouts";
import { Logo, Footer } from "@components";
import { LoginForm } from "@forms";

const LoginPage = () => {
  return (
    <>
      <Flex
        gridArea="main"
        alignItems="flex-start"
        justifyContent="center"
        height="100%"
        width="100%"
        color="white"
      >
        <Logo size="xlarge" />
      </Flex>
      <Main>
        <LoginForm />
      </Main>
      <Footer>
        <Button
          type="submit"
          colorScheme="brand"
          isFullWidth
          color="white"
          gridArea="footer"
          form="login-form"
        >
          Anmelden
        </Button>
      </Footer>
    </>
  );
};

export default LoginPage;
