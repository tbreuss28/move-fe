import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { useContext } from "react";

import { api } from "@libs";
import { User } from "@types";
import { Auth } from "@providers";

import FormField from "./components/FormField";

interface LoginFormValues {
  userName: string;
  password: string;
  submit?: never;
}

const DEFAULT_VALUES = {
  userName: "",
  password: "",
};

const LoginForm = () => {
  const router = useRouter();

  const { setUser } = useContext(Auth.Context);

  const handleSubmit = async (
    values: LoginFormValues,
    { setFieldError }: FormikHelpers<LoginFormValues>
  ) => {
    const { data: users } = await api.get<User[]>("/users");

    const user = users.find((user) => user.userName === values.userName);
    if (!user) {
      setFieldError("submit", "Benutzername oder Passwort falsch");
      return;
    }

    setUser(user);

    router.push("/moves");
  };

  return (
    <Formik initialValues={DEFAULT_VALUES} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Form>
          <Flex direction="column" style={{ gap: "1rem" }}>
            <FormField name="userName" label="Benutzername" />
            <FormField name="password" label="Passwort" type="password" />
            {errors?.submit && <div>{errors.submit}</div>}
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
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
