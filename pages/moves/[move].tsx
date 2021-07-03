import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { useContext, useEffect } from "react";

import { Footer, Header, SkillLevel } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import { Auth } from "@providers";
import { Move, MoveUser } from "@types";
import router from "next/router";

const MovePage = ({ move, movers }: { move: Move; movers: MoveUser[] }) => {
  const { user } = useContext(Auth.Context);

  const hasJoined = movers.find((mover) => mover.userId === user?.id);

  const handleJoin = async () => {
    if (!user) {
      router.push("/login");
    }
    await api.post("/moveUsers", { userId: user?.id, moveId: move.id });
  };

  useEffect(() => {
    if (!user) router.push("/login");
    if (!move) router.push("/movers");
  });

  const handleLeave = async () => {
    if (!user) {
      throw new Error("Missing user context!");
    }
    await api.delete(`/moveUsers/${hasJoined?.id}`);
  };

  return (
    <>
      <Header icon="close" />
      <Main>
        <Box color="white">
          <Flex alignItems="center">
            <SkillLevel maxLevel={3} value={move.skillId} />
            <Text ml={4}>{move.categoryName}</Text>
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
        {hasJoined ? (
          <Button onClick={handleLeave} colorScheme="red" isFullWidth>
            Verlassen
          </Button>
        ) : (
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
      </Footer>
    </>
  );
};

export default Auth.withUser(MovePage);

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: move } = await api.get<Move>(`/moves/${context.query.move}`);
  const { data: moveUsers } = await api.get<MoveUser[]>(
    `/moves/${context.query.move}/moveUsers/`
  );

  // TODO: temporary fixup
  // const movers = (moveUsers || []).filter(({ moveId }) => moveId === move.id);
  const movers: MoveUser[] = [];

  return {
    props: {
      move,
      movers: moveUsers,
    },
  };
};
