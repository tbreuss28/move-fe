import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { Field } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
  type?: "password" | "text";
}

const FormField = ({ name, label, type }: FormFieldProps) => {
  return (
    <Flex direction="column">
      <FormLabel htmlFor={name} fontSize="xs" mb="1" color="white">
        {label}
      </FormLabel>
      <Field
        id={name}
        name={name}
        as={Input}
        type={type}
        placeholder={label}
        variant="outlined"
      ></Field>
    </Flex>
  );
};

export default FormField;
