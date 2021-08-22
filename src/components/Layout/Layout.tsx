import { Footer } from '@components/Layout/Footer'
import { Header } from '@components/Layout/Header'
import { Main } from '@components/Layout/Main'
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
