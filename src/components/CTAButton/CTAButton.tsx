import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import { IoLogoOctocat } from 'react-icons/io5'

type CTAButtonProps = {
  color?: string
  bgColor?: string
  link?: string
  label?: string
  children?: React.ReactNode
}

export const CTAButton = ({
  bgColor = '#3c3c3c',
  color = '#fafafa',
  link = '/',
  label = 'Learn more',
  children,
  ...rest
}: CTAButtonProps): React.ReactElement => {
  return (
    <Box {...rest}>
      <Link href={link} passHref>
        <a>
          <Button
            backgroundColor={bgColor}
            color={color}
            borderRadius='8px'
            py='4'
            px='4'
            lineHeight='1'
            size='md'
            _hover={{
              bg: color,
              color: bgColor,
            }}>
            <IoLogoOctocat
              size='22px'
              style={{ display: 'inline', marginRight: '1ch' }}
            />{' '}
            {label}
          </Button>
        </a>
      </Link>
      {children}
    </Box>
  )
}
