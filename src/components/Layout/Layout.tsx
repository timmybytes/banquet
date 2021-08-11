import { Flex } from '@chakra-ui/react'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <Flex direction='column' align='center' maxW={{ xl: '1200px' }} m='0 auto'>
      <Header />
      {children}
      <Footer />
    </Flex>
  )
}
