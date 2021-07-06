import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { GetServerSideProps } from "next";
import { useContext, useEffect, useState } from "react";

import { Footer, Header, SkillLevel } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import { Auth } from "@providers";
import { Move, MoveUser } from "@types";
import { Map, Marker, Section } from "@components";
import router from "next/router";

const MovePage = ({ move, movers }: { move: Move; movers: MoveUser[] }) => {
  const { user } = useContext(Auth.Context);
  const [hasJoined, setJoined] = useState<boolean | undefined>(undefined);

  const handleJoin = async () => {
    if (!user) {
      router.push("/login");
    }
    await api
      .post("/moveUsers", { data: { userId: user?.id, moveId: move.id } })
      .then(() => setJoined(true));
  };

  const handleLeave = async () => {
    if (!user) {
      throw new Error("Missing user context!");
    }
    await api
      .delete("/moveUsers", { data: { userId: user?.id, moveId: move.id } })
      .then(() => setJoined(false));
  };

  const formatDate = (date: string): string => {
    return date ? format(parseISO(date), "dd.MM.yyyy, hh:mm") : "Kein Datum";
  };

  useEffect(() => {
    if (!user) router.push("/login");
    if (!move) router.push("/movers");
  });

  useEffect(() => {
    setJoined(!!movers.find((mover) => mover.userId === user?.id));
  }, []);

  return (
    <>
      <Header icon="close" />
      <Main>
        <Box color="white">
          <Flex as="header" direction="column" mb={6}>
            <Flex alignItems="center" mb="2">
              <SkillLevel maxLevel={3} value={move.skillId} />
              <Text ml={4}>{move.categoryName}</Text>
            </Flex>
            <Heading as="h1" mb={1}>
              {move.name}
            </Heading>
            <Flex>
              <Text fontSize="sm">{move.creatorId}</Text>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" alignItems="stretch" my={12}>
            <Flex direction="column" borderLeftRadius="lg" p={2}>
              <Text fontSize="sm">Von</Text>
              <Text fontSize="2xl">{formatDate(move.startTime)}</Text>
            </Flex>
            <Flex>
              <Divider orientation="vertical" />
            </Flex>
            <Flex direction="column" borderRightRadius="lg" p={2}>
              <Text fontSize="sm">Bis</Text>
              <Text fontSize="2xl">{formatDate(move.endTime)}</Text>
            </Flex>
          </Flex>

          <Flex
            direction="column"
            borderRadius="lg"
            overflow="hidden"
            height="30vh"
          >
            <Map
              activePosition={{ lat: move.latitude, lng: move.longitude }}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            >
              <Marker position={{ lat: move.latitude, lng: move.longitude }} />
            </Map>
          </Flex>

          {move.description && (
            <Section label="Beschreibung">
              <Text fontSize="large">{move.description}</Text>
            </Section>
          )}

          {movers && (
            <Section label="Teilnehmer">
              <Flex>
                <List spacing="1">
                  {movers.map((mover) => {
                    return (
                      <ListItem key={mover.userId}>
                        <Text>
                          {mover.user.firstName} {mover.user.lastName}
                        </Text>
                      </ListItem>
                    );
                  })}
                </List>
              </Flex>
            </Section>
          )}
        </Box>
      </Main>
      <Footer>
        {hasJoined ? (
          <Button onClick={handleLeave} colorScheme="red" isFullWidth>
            Verlassen
          </Button>
        ) : (
          <Button onClick={handleJoin} colorScheme="brand" isFullWidth>
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
