import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { Marker } from "react-google-maps";
import { Map } from "@components";

import FormField from "./components/FormField";

interface AddMoveFormValues {
  title: string;
  description: string;
  media?: Blob;
  category: string[];
  skilllevel: number;
  latitude?: number;
  longitude?: number;
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
    console.log("Values >>", values);
    router.push("/moves");
  };

  return (
    <Formik initialValues={DEFAULT_VALUES} onSubmit={handleSubmit}>
      {({ errors, setFieldValue, values }) => {
        console.log(values);
        return (
          <Form id="add-move-form">
            <Flex direction="column" style={{ gap: "1rem" }}>
              <FormField name="title" label="Titel" />
              // TODO: FILE UPLOADER
              <Map
                onClick={(currentPos) => {
                  const { latitude, longitude } = currentPos;
                  setFieldValue("latitude", latitude);
                  setFieldValue("longitude", longitude);
                }}
                containerElement={<div style={{ height: `50vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              >
                {values.latitude && values.longitude && (
                  <Marker
                    position={{
                      lat: values.latitude,
                      lng: values.longitude,
                    }}
                  />
                )}
              </Map>
              <FormField name="description" label="Beschreibung" />
              // TODO: SKILLLEVEL
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMoveForm;
