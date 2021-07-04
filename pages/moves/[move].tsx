import { Box, Button, Flex, Heading, Text, Spacer } from "@chakra-ui/react";
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

  const formatDate = (date: string): string => {
    return format(parseISO(date), "dd.MM.yyyy, hh:mm");
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
          <Flex alignItems="flex-start" justiyContent="space-between" my={12}>
            <Flex direction="column" flexBasis="50%">
              <Text fontSize="sm">Von</Text>
              <Text fontSize="2xl">{formatDate(move.startTime)}</Text>
            </Flex>
            <Flex direction="column" flexBasis="50%">
              <Text fontSize="sm">Bis</Text>
              <Text fontSize="2xl">{formatDate(move.endTime)}</Text>
            </Flex>
          </Flex>
          <Text fontSize="large">{move.description}</Text>
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
