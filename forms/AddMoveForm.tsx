import { useContext } from "react";
import { Flex, FormLabel } from "@chakra-ui/react";
import { Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/router";
import { Marker } from "react-google-maps";
import { Map, SkillLevel } from "@components";
import { api } from "@libs";
import { Auth } from "@providers";

import FormField from "./components/FormField";

interface AddMoveFormValues {
  name: string;
  description: string;
  media?: Blob;
  category: string[];
  skilllevel: number;
  latitude?: number;
  longitude?: number;
}

const DEFAULT_VALUES: AddMoveFormValues = {
  name: "",
  description: "",
  media: undefined,
  category: [""],
  skilllevel: 0,
};

const AddMoveForm = () => {
  const router = useRouter();
  const { user } = useContext(Auth.Context);

  const handleSubmit = async (
    values: AddMoveFormValues,
    { setFieldError }: FormikHelpers<AddMoveFormValues>
  ) => {
    const payload = {
      name: values.name,
      description: values.description,
      latitude: values.latitude,
      longitude: values.longitude,
      skillId: values.skilllevel,
      creatorId: user?.id,
    };
    api
      .post("/moves", payload)
      .then(() => router.push("/moves"))
      .catch((err) => console.error(err.message));
  };

  return (
    <Formik initialValues={DEFAULT_VALUES} onSubmit={handleSubmit}>
      {({ errors, setFieldValue, values }) => {
        return (
          <Form id="add-move-form">
            <Flex direction="column" style={{ gap: "1rem" }}>
              <FormField name="name" label="Titel" />
              <Flex direction="column">
                <FormLabel fontSize="xs" mb="2" color="white">
                  Location
                </FormLabel>
                <Flex
                  direction="column"
                  borderRadius="lg"
                  overflow="hidden"
                  height="50vh"
                >
                  <Map
                    onClick={(currentPos) => {
                      const { lat, lng } = currentPos;
                      setFieldValue("latitude", lat);
                      setFieldValue("longitude", lng);
                    }}
                    containerElement={<div style={{ height: `100%` }} />}
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
                </Flex>
              </Flex>
              <FormField name="description" label="Beschreibung" multiLine />
              <Flex direction="column">
                <FormLabel fontSize="xs" mb="2" color="white">
                  Skilllevel
                </FormLabel>
                <SkillLevel
                  maxLevel={3}
                  value={values.skilllevel}
                  onChange={(value) => setFieldValue("skilllevel", value)}
                />
              </Flex>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddMoveForm;
