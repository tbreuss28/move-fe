import { Button } from "@chakra-ui/react";

import { Main } from "@layouts";
import { Header, Footer } from "@components";
import { LoginForm } from "@forms";

const LoginPage = () => {
  return (
    <>
      <Header />
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
