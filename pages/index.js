import { getCoffeePlaces, getPlacesInSpotlight } from '../lib/airtable';
import { SimpleGrid, Container, Heading, Text } from '@chakra-ui/react';
import CoffeeCard from "../components/coffeeCard";
import React from "react";


export async function getStaticProps() {
  const allPlacesData = await getCoffeePlaces()
  const allPlacesInSpotlight = await getPlacesInSpotlight()
  return {
    props: {
      allPlacesData,
      allPlacesInSpotlight
    }
  }
}


export default function Home(props) {
  const placesData = props.allPlacesInSpotlight
  placesData.map((placesData) => (
    console.log(placesData.fields.image[0].url)
  ))

  return (
    <Container maxW='container.xl' py='20'>
      <Heading>Meine Lieblingscafes</Heading>
      <SimpleGrid minChildWidth='400px' spacing={8} py={8}>
      {placesData.map((placesData) => (
        <CoffeeCard 
          key={placesData.id} 
          name={placesData.fields.name} 
          hood={placesData.fields.hood} 
          note={placesData.fields.note}
          noteHeadline={placesData.fields.noteHeadline}
          src={placesData.fields.image[0].url}
        />
      ))}
      </SimpleGrid>
    </Container>
    
  )
}
