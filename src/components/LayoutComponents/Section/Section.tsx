import { Box } from '@chakra-ui/react'

type SectionProps = {
  children?: React.ReactNode
  [x: string]: any
}

export const Section = ({
  children,
  ...rest
}: SectionProps): React.ReactElement => {
  return (
    <Box as='section' my={5} px='32px' {...rest}>
      {children}
    </Box>
  )
}
