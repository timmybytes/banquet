import { Box } from '@chakra-ui/react'
import { FOOTER_DATA } from '@data/SiteData'

export const Footer = (): React.ReactElement => {
  return (
    <Box as='footer' position='absolute' bottom='0' height='24px'>
      <Box as='p' fontSize='sm' color='gray.500' pb='15px'>
        {FOOTER_DATA}
      </Box>
    </Box>
  )
}
