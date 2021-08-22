import { Box } from '@chakra-ui/react'

type MainProps = {
  children?: React.ReactNode
}

export const Main = ({ children, ...rest }: MainProps): React.ReactElement => {
  return (
    <Box as='main' mt='5' mx='auto' {...rest}>
      {children}
    </Box>
  )
}
