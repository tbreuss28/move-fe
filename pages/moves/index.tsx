import { useContext, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { Box } from "@chakra-ui/react";

import { Header, Footer, Map, Marker } from "@components";
import { api } from "@libs";
import { Move } from "@types";
import { AppNavigation } from "@navigations";
import { Search } from "@providers";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  const { searchTerm } = useContext(Search.Context);
  const [filteredMoves, setFilteredMoves] = useState(moves);

  useEffect(() => {
    if (searchTerm) {
      const filteredMoves = moves.filter((move) =>
        move.name.includes(searchTerm)
      );
      console.log(filteredMoves);
    }

    setFilteredMoves(filteredMoves ?? moves);
  }, [searchTerm, moves]);

  return (
    <>
      <Header color="primary" icon="search" />
      {/* Special Grid Area for Map */}
      <Box gridArea={"header / header / footer / footer"}>
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          {filteredMoves.map((move) => (
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
  const { data } = await api.get<Move[]>("/moves");

  return {
    props: {
      moves: data,
    },
  };
};
