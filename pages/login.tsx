import { Main } from "@layouts";
import { Header } from "@components";
import { LoginForm } from "@forms";

const LoginPage = () => {
  return (
    <>
      <Header />
      <Main>
        <LoginForm />
      </Main>
    </>
  );
};

export default LoginPage;
