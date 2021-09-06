import { Box, Flex, Text } from '@chakra-ui/react'

type GettingStartedSectionProps = {
  children?: React.ReactNode
}

export const GettingStartedSection = ({
  children,
  ...rest
}: GettingStartedSectionProps): React.ReactElement => {
  return <Box {...rest}>{children}</Box>
}
