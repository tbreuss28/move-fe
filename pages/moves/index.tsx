import { GetServerSideProps } from "next";
import Link from "next/link";
import { Move } from "../types/Moves";

const MovesPage = ({ moves }: { moves: Move[] }) => {
  return (
    <div>
      <Link href={`/`}>
        <a>Back</a>
      </Link>
      <ul>
        {moves.map((move) => {
          return (
            <li>
              <Link href={`/moves/${move.id}`}>
                <a>
                  {move.id} {move.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovesPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;

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
