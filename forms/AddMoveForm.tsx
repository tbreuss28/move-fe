import { Button, Flex } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";

import { Footer } from "@components";

import FormField from "./components/FormField";

interface AddMoveFormValues {
  title: string;
  description: string;
  media?: Blob;
  category: string[];
  skilllevel: number;
}

const DEFAULT_VALUES: AddMoveFormValues = {
  title: "",
  description: "",
  media: undefined,
  category: [""],
  skilllevel: 0,
};

const AddMoveForm = () => {
  const router = useRouter();

  const handleSubmit = async (
    values: AddMoveFormValues,
    { setFieldError }: FormikHelpers<AddMoveFormValues>
  ) => {
    console.log("I GOT MOVED, BABY!");
    router.push("/moves");
  };

  return (
    <Formik initialValues={DEFAULT_VALUES} onSubmit={handleSubmit}>
      {({ errors }) => (
        <Form id="add-move-form">
          <Flex direction="column" style={{ gap: "1rem" }}>
            <FormField name="title" label="Titel" />
            // TODO: FILE UPLOADER
            <FormField name="description" label="Beschreibung" />
            // TODO: SKILLLEVEL
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default AddMoveForm;
