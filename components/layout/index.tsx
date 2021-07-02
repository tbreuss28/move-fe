import { ArrowBackIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
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
            <ArrowBackIcon />
          </a>
        </Link>
      )}
    </Flex>
  )
}

export function Main ({ children }: PropsWithChildren<{}>) {
  return <Flex flex='1'>{children}</Flex>
}

function Layout ({ children }: PropsWithChildren<{}>) {
  return (
    <Flex bg='primary' color='light' direction='column' height='100vh'>
      {children}
    </Flex>
  )
}

export default Layout
