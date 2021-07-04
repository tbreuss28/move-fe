import { Flex, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Field } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
  type?: "password" | "text";
  multiLine?: boolean;
}

const FormField = ({
  name,
  label,
  type = "text",
  multiLine = false,
}: FormFieldProps) => {
  return (
    <Flex direction="column">
      <FormLabel htmlFor={name} fontSize="xs" mb="1" color="white">
        {label}
      </FormLabel>
      <Field
        id={name}
        name={name}
        as={multiLine ? Textarea : Input}
        type={type}
        placeholder={label}
        variant="outlined"
      />
    </Flex>
  );
};

export default FormField;
