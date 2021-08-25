import { Flex } from '@chakra-ui/react'

type LayoutWrapperProps = {
  children?: React.ReactNode
}

export const LayoutWrapper = ({
  children,
  ...rest
}: LayoutWrapperProps): React.ReactElement => {
  return (
    <Flex
      direction='column'
      align='center'
      m='0 auto'
      minH='100vh'
      height='98%'
      width='100%'
      position='relative'
      pb='24px'
      {...rest}>
      {children}
    </Flex>
  )
}
