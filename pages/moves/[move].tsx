import { GetServerSideProps } from 'next'
import Link from 'next/link'

import Layout from '../../components/layout'
import { Move } from '../../types/Moves'

function MovePage ({ move }: { move: Move }) {
  return (
    <Layout>
      <div>
        {move.id} / {move.title}
        <br />
        <Link href={`/moves`}>
          <a>Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export default MovePage

export const getServerSideProps: GetServerSideProps = async context => {
  return {
    props: {
      move: {
        id: context.query.move,
        title: 'Test Title'
      }
    }
  }
}
