import { GetServerSideProps } from "next";
import Router from "next/router";
import { Box } from "@chakra-ui/react";

import { Header, Map, Marker } from "@components";
import { api } from "@libs";
import { Move } from "@types";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  return (
    <>
      <Header />
      <Box gridArea={"main"}>
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          {moves.map((move) => (
            <Marker
              key={move.id}
              position={{ lat: move.latitude, lng: move.longitude }}
              onClick={() => Router.push(`/moves/${move.id}`)}
            />
          ))}
        </Map>
      </Box>
    </>
  );
};

export default MovesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await api.get<{ _embedded: { moveList: Move[] } }>("/moves");
  return {
    props: {
      moves: data._embedded.moveList,
    },
  };
};
