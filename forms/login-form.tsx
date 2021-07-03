import { useFormik } from "formik";
import { FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

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
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input
        id="username"
        name="username"
        placeholder="Username"
        onChange={formik.handleChange}
        value={formik.values.username}
        filled
      />
      <FormLabel htmlFor="passwort">Passwort</FormLabel>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Passwort"
        onChange={formik.handleChange}
        value={formik.values.password}
        filled
      />
      <Button
        type="submit"
        isFullWidth
        colorScheme={"yellow"}
        background="brand"
      >
        Anmelden
      </Button>
    </form>
  );
};

export default LoginForm;
