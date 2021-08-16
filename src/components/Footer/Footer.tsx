import { Box } from '@chakra-ui/react'
import { FOOTER_DATA } from '@components/Meta'

export const Footer = (): React.ReactElement => {
  return (
    <Box as='footer' position='absolute' bottom='0'>
      {FOOTER_DATA}
    </Box>
  )
}
