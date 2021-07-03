import { Button, Flex } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useContext } from "react";

import { api } from "@libs";
import { User } from "@types";
import { Auth } from "@providers";

import FormField from "./components/FormField";

interface LoginFormValues {
  userName: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();

  const { setUser } = useContext(Auth.Context);

  const handleSubmit = async (values: LoginFormValues) => {
    const { data: users } = await api.get<User[]>("/users");

    const user = users.find((user) => user.userName === values.userName);
    if (!user) {
      throw new Error("Benutzername oder Passwort falsch");
    }

    setUser(user);

    router.push("/moves");
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction="column" style={{ gap: "1rem" }}>
        <FormField
          name="userName"
          label="Benutzername"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        <FormField
          name="password"
          label="Passwort"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          colorScheme="whiteAlpha"
          isFullWidth
          background="brand"
          color="white"
          mt={8}
          gridArea="footer"
        >
          Anmelden
        </Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
