import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/layout'
import { Move } from '../../types/Moves'

function MovesPage ({ moves }: { moves: Move[] }) {
  return (
    <Layout>
      <div>
        <Link href={`/`}>
          <a>Back</a>
        </Link>
        <ul>
          {moves.map(move => {
            return (
              <li key={move.id}>
                <Link href={`/moves/${move.id}`}>
                  <a>
                    {move.id} {move.title}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default MovesPage

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      moves: [
        {
          id: 'test1',
          title: 'Test Move 1'
        },
        {
          id: 'test2',
          title: 'Test Move 2'
        }
      ]
    }
  }
}
