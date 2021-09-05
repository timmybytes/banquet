import {
  Footer,
  Header,
  LayoutWrapper,
  Main,
} from '@components/LayoutComponents'

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
