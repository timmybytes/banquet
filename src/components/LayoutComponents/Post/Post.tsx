import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Stack,
} from '@chakra-ui/react'

type PostProps = {
  title: string
  date?: string
  children?: React.ReactNode
}

export const Post = ({
  date = new Date().toLocaleDateString(),
  title,
  children,
  ...rest
}: PostProps): React.ReactElement => {
  return (
    <Box {...rest}>
      <Heading py={4}>{title || 'New Post'}</Heading>
      <Center height='40px'>
        <Badge rounded='md' variant='solid' mr={4}>
          {date}
        </Badge>
        <Divider />
      </Center>
      {children}
      <Center height='40px'>
        <Divider />
        {/* TODO: Social buttons */}
        <Stack direction='row' px={4} justifyContent='center' spacing='1.5rem'>
          <Button size='xs' rounded='full' colorScheme='twitter'></Button>
          <Button size='xs' rounded='full' colorScheme='linkedin'></Button>
          <Button size='xs' rounded='full' colorScheme='purple'></Button>
          <Button size='xs' rounded='full' colorScheme='orange'></Button>
          <Button size='xs' rounded='full' colorScheme='pink'></Button>
        </Stack>
        <Divider />
      </Center>
    </Box>
  )
}
