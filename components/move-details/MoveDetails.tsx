import { Button, Heading, Spacer, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";

import { SkillLevel } from "@components";
import { Move } from "@types";

const MoveDetails = ({ move }: { move: Move }) => {
  return (
    <>
      <SkillLevel maxLevel={5} value={3} />
      <Heading as="h1">{move.name}</Heading>
      <Text>{move.description}</Text>
      <Text>Von: {format(parseISO(move.startTime), "Pp")}</Text>
      <Text>Bis: {format(parseISO(move.endTime), "Pp")}</Text>
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
