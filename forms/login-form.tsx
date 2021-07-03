import { useFormik, Form } from "formik";
import { FormLabel, Input, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: () => {
      router.push("/moves");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormLabel htmlFor="username">Username</FormLabel>
      <Input id="username" name="username" placeholder="Username" filled />
      <FormLabel htmlFor="passwort">Passwort</FormLabel>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Passwort"
        filled
      />
      <Button type="submit" isFullWidth background={"brand"}>
        Anmelden
      </Button>
    </Form>
  );
};

export default LoginForm;
