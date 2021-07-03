import { GetServerSideProps } from "next";
import Router from "next/router";
import { Box } from "@chakra-ui/react";

import { Header, Footer, Map, Marker } from "@components";
import { api } from "@libs";
import { Move } from "@types";
import { AppNavigation } from "@navigations";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  return (
    <>
      <Header />
      <Box gridArea={"header / header / footer / footer"}>
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
      <Footer>
        <AppNavigation />
      </Footer>
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
