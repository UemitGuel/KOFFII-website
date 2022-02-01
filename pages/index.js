import { getCoffeePlaces } from '../lib/places'
import { Box } from '@chakra-ui/react'

export async function getStaticProps() {
  const allPostsData = await getCoffeePlaces()
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home(props) {

  return (
    <Box bg='tomato' w='100%' p={4} color='white'>
      This is the Box
    </Box>
  )
}
