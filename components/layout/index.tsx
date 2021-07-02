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
  return <Box display='flex' flex='1'>{children}</Box>
}

function Layout ({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
