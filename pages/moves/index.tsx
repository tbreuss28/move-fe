import { GetServerSideProps } from "next";

import { Header, Map, Marker } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import { Move } from "@types";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  return (
    <>
      <Header />
      <Main p={0}>
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        >
          {moves.map((move) => (
            <Marker key={move.id} position={move.position} />
          ))}
        </Map>
      </Main>
    </>
  );
};

export default MovesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await api.get('/moves')
  console.log(res)
  return {
    props: {
      moves: [
        {
          id: "test1",
          title: "Test Move 1",
          position: { lat: -34.397, lng: 150.644 }
        },
        {
          id: "test2",
          title: "Test Move 2",
          position: { lat: -34.912, lng: 151.12 }
        }
      ]
    }
  };
};
