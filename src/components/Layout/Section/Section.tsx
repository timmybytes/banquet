import { Box } from '@chakra-ui/react'

type SectionProps = {
  children?: React.ReactNode
  id?: string
  sx?: Record<string, unknown>
}

export const Section = ({
  children,
  sx,
  id,
  ...rest
}: SectionProps): React.ReactElement => {
  return (
    <Box id={id} as='section' my={5} px='32px' sx={sx} {...rest}>
      {children}
    </Box>
  )
}
