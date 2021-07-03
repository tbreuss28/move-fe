import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { useContext } from "react";

import { Footer, Header, SkillLevel } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import { Auth } from "@providers";
import { Move, MoveUser } from "@types";

const MovePage = ({ move, movers }: { move: Move; movers: MoveUser[] }) => {
  const { user } = useContext(Auth.Context);

  const hasJoined = movers.find((mover) => mover.userId === user?.id);

  const handleJoin = async () => {
    if (!user) {
      throw new Error("Missing user context!");
    }
    await api.post("/moveUsers", { userId: user.id, moveId: move.id });
  };

  return (
    <>
      <Header icon="close" />
      <Main>
        <Box color="white">
          <Flex alignItems="center">
            <SkillLevel maxLevel={5} value={3} />
            <Text ml={4}>Basketball</Text>
          </Flex>
          <Heading as="h1" my={6}>
            {move.name}
          </Heading>
          <Text>{move.description}</Text>
          <Text>Von: {format(parseISO(move.startTime), "Pp")}</Text>
          <Text>Bis: {format(parseISO(move.endTime), "Pp")}</Text>
        </Box>
      </Main>
      <Footer>
        {!hasJoined && (
          <Button
            onClick={handleJoin}
            colorScheme="whiteAlpha"
            isFullWidth
            background="brand"
            color="white"
          >
            Teilnehmen
          </Button>
        )}
        {hasJoined && (
          <Button
            colorScheme="whiteAlpha"
            isFullWidth
            background="primary"
            color="white"
            disabled
          >
            Verlassen
          </Button>
        )}
      </Footer>
    </>
  );
};

export default Auth.withUser(MovePage);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: move } = await api.get<Move>(`/moves/${context.query.move}`);
  const { data: moveUsers } = await api.get<MoveUser[]>("/moveUsers");

  const movers = moveUsers.filter(({ moveId }) => moveId === move.id);

  return {
    props: {
      move,
      movers,
    },
  };
};
