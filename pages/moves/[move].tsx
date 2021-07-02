import { GetServerSideProps } from "next";
import Link from "next/link";
import { Move } from "../../types/Moves";

const MovePage = ({ move }: { move: Move }) => {
  return (
    <div>
      {move.id} / {move.title}
      <br />
      <Link href={`/moves`}>
        <a>Back</a>
      </Link>
    </div>
  );
};

export default MovePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  return {
    props: {
      move: {
        id: query.move,
        title: "Test Title",
      },
    },
  };
};
