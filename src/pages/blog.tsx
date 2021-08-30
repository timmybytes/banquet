import { Box, Heading, Text } from '@chakra-ui/react'
import { Post } from '@components/LayoutComponents/Post'
import React from 'react'
export default function Blog() {
  return (
    <Box maxW={{ base: '100%', lg: '85ch' }}>
      <Heading py={8}>Blog</Heading>
      <Text py={4}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, ea
        nemo cupiditate officiis totam a accusamus, sint, sunt praesentium
        tenetur eveniet neque repudiandae consequuntur eius error minima
        perspiciatis cumque unde?
      </Text>
      <Text py={4}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde similique
        totam, sapiente exercitationem doloremque commodi possimus maiores omnis
        porro dolores quaerat alias, facilis, aliquid neque vel itaque adipisci
        nemo eaque?
      </Text>
      <Post title='Post One'>
        <Text py={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et
          corrupti nostrum laborum qui similique voluptas labore rerum
          reprehenderit quidem odio ut unde, quibusdam sequi praesentium facilis
          sunt officiis quasi!
        </Text>
        <Text py={4}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          debitis odit ullam enim dolorum, deleniti blanditiis corrupti, labore
          ipsa laborum nemo non illo iste fuga. Perferendis voluptatibus eum
          natus nemo!
        </Text>
      </Post>
    </Box>
  )
}
