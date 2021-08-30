import { Footer } from '@components/LayoutComponents/Footer'
import { Header } from '@components/LayoutComponents/Header'
import { Main } from '@components/LayoutComponents/Main'
import { LayoutWrapper } from './LayoutWrapper'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutWrapper>
  )
}
