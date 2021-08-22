import { Box } from '@chakra-ui/react'

type SectionProps = {
  children?: React.ReactNode
}

export const Section = ({ children }: SectionProps): React.ReactElement => {
  return (
    <Box as='section' my={5} px='32px'>
      {children}
    </Box>
  )
}
