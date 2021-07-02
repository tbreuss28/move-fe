import { ArrowBackIcon } from '@chakra-ui/icons'
import { Avatar, Flex, Spacer } from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
interface HeaderProps {
  backLink?: LinkProps
}

export function Header ({ backLink }: HeaderProps) {
  return (
    <Flex align='center' bg='secondary' height={16} pl={4} pr={4}>
      {backLink && (
        <Link {...backLink}>
          <a>
            <ArrowBackIcon w={6} h={6} />
          </a>
        </Link>
      )}
      <Spacer />
      <Avatar />
    </Flex>
  )
}

export function Main ({ children }: PropsWithChildren<{}>) {
  return (
    <Flex direction='column' flex='1' p={4}>
      {children}
    </Flex>
  )
}

function Layout ({ children }: PropsWithChildren<{}>) {
  return (
    <Flex bg='primary' color='light' direction='column' height='100vh'>
      {children}
    </Flex>
  )
}

export default Layout
