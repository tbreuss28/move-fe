import { Flex, Input, FormLabel } from "@chakra-ui/react";
import { FormikContextType, FormikProps } from "formik";
import { ChangeEvent, ReactNode } from "react";

interface FormFieldProps {
  name: string;
  label: string;
  value: string;
  type?: "password" | "text";
  onChange: (e: ChangeEvent<any>) => void;
}

const FormField = ({ name, label, value, type, onChange }: FormFieldProps) => {
  return (
    <Flex direction="column">
      <FormLabel htmlFor={name} fontSize="xs" mb="1">
        {label}
      </FormLabel>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        onChange={onChange}
        value={value}
        variant="filled"
      />
    </Flex>
  );
};

export default FormField;
