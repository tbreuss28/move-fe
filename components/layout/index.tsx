import { Box } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

function Container ({ children }: PropsWithChildren<{}>) {
  return (
    <Box display='flex' flexDirection='column' height='100vh'>
      {children}
    </Box>
  )
}

function Main ({ children }: PropsWithChildren<{}>) {
  return <Box flex='1'>{children}</Box>
}

function Layout ({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <div>Header</div>
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
