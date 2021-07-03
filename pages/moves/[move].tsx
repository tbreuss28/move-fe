import { GetServerSideProps } from "next";

import { Header, MoveDetails } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import { Move } from "@types";

const MovePage = ({ move }: { move: Move }) => {
  return (
    <>
      <Header />
      <Main>
        <MoveDetails move={move} />
      </Main>
    </>
  );
};

export default MovePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: move } = await api.get<Move>(`/moves/${context.query.move}`);
  return {
    props: {
      move,
    },
  };
};
