import { Heading, Text } from "@chakra-ui/react";

import { Move } from "@types";

const MoveDetails = ({ move }: { move: Move }) => {
  return (
    <div>
      <Heading as="h1">{move.name}</Heading>
      <Text>{move.description}</Text>
    </div>
  );
};

export default MoveDetails;
