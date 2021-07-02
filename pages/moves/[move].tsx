import { GetServerSideProps } from 'next'

import Layout, { Header, Main } from '../../components/layout'
import { Move } from '../../types/Moves'

function MovePage ({ move }: { move: Move }) {
  return (
    <Layout>
      <Header backLink={{ href: '/moves ' }} />
      <Main>
        {move.id} / {move.title}
      </Main>
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
