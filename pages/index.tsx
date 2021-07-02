import { Box } from '@chakra-ui/react'
import Link from 'next/link'

import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout>
      <Box m='10' border={'4px solid red'} p={4}>
        <Link href='/moves'>
          <a>Moves</a>
        </Link>
      </Box>
    </Layout>
  )
}
