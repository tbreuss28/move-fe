import { useFormik } from "formik";
import { Flex, Button, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import FormField from "./components/FormField";

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values: LoginFormValues) => {
      console.table(values);
      router.push("/moves");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex direction="column" style={{ gap: "1rem" }}>
        <FormField
          name="username"
          label="Benutzername"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <FormField
          name="password"
          label="Passwort"
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
        >
          Anmelden
        </Button>
      </Flex>
    </form>
  );
};

export default LoginForm;
