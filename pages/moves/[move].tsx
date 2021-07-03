import { GetServerSideProps } from "next";

import { Header } from "../../components";
import { Main } from "../../layouts";
import type { Move } from "../../types";

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
  return {
    props: {
      move: {
        id: context.query.move,
        title: "Test Title",
      },
    },
  };
};
