import { Button } from "@chakra-ui/react";

import { AppLayout, Main } from "@layouts";
import { Footer, Header } from "@components";
import { AddMoveForm } from "@forms";

const AddMovePage = () => {
  return (
    <AppLayout>
      <Header icon="close" />
      <Main>
        <AddMoveForm />
      </Main>
      <Footer>
        <Button
          type="submit"
          colorScheme="whiteAlpha"
          isFullWidth
          background="brand"
          color="white"
          gridArea="footer"
          form="add-move-form"
        >
          Move erstellen
        </Button>
      </Footer>
    </AppLayout>
  );
};

export default AddMovePage;
