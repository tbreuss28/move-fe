import { Button, Heading, Spacer, Text } from "@chakra-ui/react";

import { Move } from "@types";

const MoveDetails = ({ move }: { move: Move }) => {
  return (
    <>
      <Heading as="h1">{move.name}</Heading>
      <Text>{move.description}</Text>
      <Spacer />
      <Button
        colorScheme="whiteAlpha"
        isFullWidth
        background="brand"
        color="white"
      >
        Teilnehmen
      </Button>
    </>
  );
};

export default MoveDetails;
