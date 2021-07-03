import { GetServerSideProps } from "next";
import Link from "next/link";

import { Header, Map } from "@components";
import { Main } from "@layouts";
import { Move } from "@types";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  return (
    <>
      <Header />
      <Main>
        <Map
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {moves.map((move) => {
          return (
            <div key={move.id}>
              <Link href={`/moves/${move.id}`}>
                <a>
                  {move.id} {move.title}
                </a>
              </Link>
            </div>
          );
        })}
      </Main>
    </>
  );
};

export default MovesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      moves: [
        {
          id: "test1",
          title: "Test Move 1"
        },
        {
          id: "test2",
          title: "Test Move 2"
        }
      ]
    }
  };
};
