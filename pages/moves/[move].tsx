import { GetServerSideProps } from "next";

import { Header } from "@components";
import { Main } from "@layouts";
import { api } from "@libs";
import type { Move } from "@types";

const MovePage = ({ move }: { move: Move }) => {
  return (
    <>
      <Header backLink={{ href: "/moves " }} />
      <Main>
        {move.id} / {move.title}
      </Main>
    </>
  );
};

export default MovePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await api.get(`/moves/${context.query.move}`)
  console.log(res)
  return {
    props: {
      move: {
        id: context.query.move,
        title: "Test Title",
      },
    },
  };
};
