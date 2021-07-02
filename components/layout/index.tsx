import { Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

function Container ({ children }: PropsWithChildren<{}>) {
  return (
    <Flex color='light' bg="primary" direction='column' height='100vh'>
      {children}
    </Flex>
  )
}

function Main ({ children }: PropsWithChildren<{}>) {
  return <Flex flex='1'>{children}</Flex>
}

function Layout ({ children }: PropsWithChildren<{}>) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}

export default Layout
