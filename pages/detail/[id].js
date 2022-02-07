import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    AspectRatio,
    Center
  } from '@chakra-ui/react';
import {
    IoAnalyticsSharp,
    IoLogoBitcoin,
    IoSearchSharp,
  } from 'react-icons/io5';
import { ReactElement } from 'react';
import { getCoffeePlaceIDs, getPlaceByID } from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import Head from 'next/head';
import FeatureView from '../../components/featureView';

const DetailView = ({place}) => {
    const fields = place.place[0].fields

    return (
          <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <FeatureView 
                    features={fields.features} 
                />
                {fields.noteHeadline != null ? <Heading>{fields.name}</Heading> : <Heading>{fields.name} - {fields.noteHeadline}</Heading>}
                {fields.noteHeadline && 
                    <Text color={'gray.500'} fontSize={'lg'}>
                        {fields.note}
                    </Text> 
                }
                <Stack
                  spacing={4}
                  divider={
                    <StackDivider
                      borderColor={useColorModeValue('gray.100', 'gray.700')}
                    />
                  }>
          </Stack>
        </Stack>
        {fields.image[0].url &&
        <AspectRatio>
            <Flex>
                <Image
                    rounded={'md'}
                    alt={'feature image'}
                    src={fields.image[0].url}
                    objectFit={'cover'}
                />
            </Flex>
        </AspectRatio>
        }
        <Center>
        <iframe width='800' height="450" loading="lazy" allowfullscreen
        src={"https://www.google.com/maps/embed/v1/place?q=place_id:" + (fields.placeID) + "&key=" + (process.env.GOOGLE_MAPS_API)}>
            
        </iframe>
        </Center>
      </SimpleGrid>
    </Container>
  );
};

export async function getStaticPaths() {
    const paths = await getCoffeePlaceIDs()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const place = await getPlaceByID(params.id)
    // ...
    return {
        props: {
          place: place
        }
      }
  }

export default DetailView;



