import { useContext, useEffect } from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { Box } from "@chakra-ui/react";
import { Marker } from "react-google-maps";
import { Header, Footer, Map } from "@components";
import { api } from "@libs";
import { Move } from "@types";
import { AppNavigation } from "@navigations";
import { Search, Auth } from "@providers";
import router from "next/router";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  const { searchTerm } = useContext(Search.Context);
  const { user } = useContext(Auth.Context);

  useEffect(() => {
    if (!user) router.push("/login");
  });

  return (
    <>
      <Header color="primary" icon="search" />
      {/* Special Grid Area for Map */}
      <Box gridArea={"header / header / footer / footer"}>
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          {moves
            .filter((move) =>
              move.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? "")
            )
            .map((move) => (
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
