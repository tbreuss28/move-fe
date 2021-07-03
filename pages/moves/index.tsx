import { GetServerSideProps } from "next";
import Link from "next/link";

import Layout, { Header, Main } from "../../components/layout";
import { Move } from "../../types/Moves";

function MovesPage({ moves }: { moves: Move[] }) {
  return (
    <Layout>
      <Header />
      <Main>
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
    </Layout>
  );
}

export default MovesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      moves: [
        {
          id: "test1",
          title: "Test Move 1",
        },
        {
          id: "test2",
          title: "Test Move 2",
        },
      ],
    },
  };
};
