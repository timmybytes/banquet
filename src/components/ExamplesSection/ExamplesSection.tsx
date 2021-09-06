import {
  Box,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Article, Section } from '@components/Layout'
import React from 'react'
import {
  SiEslint,
  SiJest,
  SiNextDotJs,
  SiPrettier,
  SiTypescript,
} from 'react-icons/si'

type ExamplesSectionProps = {
  children?: React.ReactNode
}

export const ExamplesSection = ({
  children,
  ...rest
}: ExamplesSectionProps): React.ReactElement => {
  return (
    <Section
      sx={{
        d: 'flex',
        pt: '5rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        w: '100%',
      }}
      id='features'
      {...rest}>
      <Box
        p={{ base: '0', md: '2rem' }}
        w='100%'
        d='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'>
        <Text
          as='h2'
          my='1rem'
          fontFamily='heading'
          fontSize={{ base: '2rem', md: '3rem' }}
          maxW='30ch'
          fontWeight='200'
          textTransform='uppercase'
          color='brand.primary'
          textShadow='.25px .25px 0 #3c3c3c'>
          Examples
        </Text>
      </Box>
      <Box
        // display='grid'
        gridTemplateColumns={{ base: '1fr', md: 'auto auto' }}
        gridGap={10}
        justifyItems='stretch'
        justifyContent='center'
        alignItems='center'>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Article heading='Fast setup & easy configuration.'>
            <Text my={2}>
              Banquet follows a familiar React project structure, with a few
              caveats. Most config files are located in the root directory,
              including those for:
              <List my={2}>
                <ListItem>
                  <ListIcon as={SiJest} />
                  <code>jest</code>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiEslint} />
                  <code>eslint</code>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiPrettier} />
                  <code>prettier</code>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiNextDotJs} />
                  <code>next</code>
                </ListItem>
                <ListItem>
                  <ListIcon as={SiTypescript} />
                  <code>typescript</code>
                </ListItem>
              </List>
            </Text>
            <Text my={2}>
              The <code>src</code> directory holds <code>assets</code>,{' '}
              <code>components</code>, <code>data</code>, <code>pages</code>,
              and <code>theme</code> files. You can rearrange these however you
              like, but keep in mind because Banquet is a Next app,{' '}
              <a href='https://nextjs.org/docs/basic-features/pages'>
                there are specific ways in which the <code>pages</code>{' '}
                directory files must be laid out
              </a>
              .
            </Text>
          </Article>
          <Image
            size='100%'
            // objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
        <Stack>
          <Article heading='Fast setup & easy configuration.'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              iste autem? Nisi natus laborum, nam pariatur in numquam voluptates
              quas possimus, soluta doloremque, culpa quia saepe ut. Ab, ducimus
              neque.
            </Text>
          </Article>
          <Image
            size='100%'
            objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
        <Stack>
          <Article heading='Fast setup & easy configuration.'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              iste autem? Nisi natus laborum, nam pariatur in numquam voluptates
              quas possimus, soluta doloremque, culpa quia saepe ut. Ab, ducimus
              neque.
            </Text>
          </Article>
          <Image
            size='100%'
            objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
        <Stack>
          <Article heading='Fast setup & easy configuration.'>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              iste autem? Nisi natus laborum, nam pariatur in numquam voluptates
              quas possimus, soluta doloremque, culpa quia saepe ut. Ab, ducimus
              neque.
            </Text>
          </Article>
          <Image
            size='100%'
            objectFit='cover'
            rounded='1rem'
            shadow='2xl'
            src='https://source.unsplash.com/random/600x400'
          />
        </Stack>
      </Box>
      {children}
    </Section>
  )
}
