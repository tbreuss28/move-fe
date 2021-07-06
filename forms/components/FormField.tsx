import { Flex, FormLabel, Input, Textarea, Text } from "@chakra-ui/react";
import { Field } from "formik";

interface FormFieldProps {
  name: string;
  label: string;
  type?: "password" | "text";
  multiLine?: boolean;
  readonly?: boolean;
  value?: string;
}

const FormField = ({
  name,
  label,
  type = "text",
  multiLine = false,
  readonly,
  value,
}: FormFieldProps) => {
  return (
    <Flex direction="column">
      <FormLabel htmlFor={name} fontSize="xs" mb="2" color="white">
        {label}
      </FormLabel>
      {readonly ? (
        <Text color="white">{value}</Text>
      ) : (
        <Field
          id={name}
          name={name}
          as={multiLine ? Textarea : Input}
          type={type}
          placeholder={label}
          variant="outlined"
        />
      )}
    </Flex>
  );
};

export default FormField;
