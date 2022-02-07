import { getCoffeePlaces, getPlacesInSpotlight } from '../lib/airtable';
import { SimpleGrid, Container, Heading, Text, Divider } from '@chakra-ui/react';
import InSpotlightCard from "../components/inSpotlightCard";
import React from "react";
import CoffeeCard from '../components/coffeeCard';
import Link from "../components/link";

export async function getStaticProps() {
  const coffeeData = await getCoffeePlaces()
  const spotlightData = await getPlacesInSpotlight()
  return {
    props: {
      coffeeData: coffeeData,
      spotlightData: spotlightData
    }
  }
}


export default function Home(props) {
  const spotlightData = props.spotlightData
  const coffeeData = props.coffeeData

  return (
    <Container maxW='container.xl' py='20'>
      <Heading>Meine Lieblingscafes</Heading>
      <SimpleGrid minChildWidth='250px' spacing={8} py={8}>
      {spotlightData.map((spotlightData) => (
        <Link href={`/detail/${spotlightData.id}`} unstyled>
            <InSpotlightCard 
            key={spotlightData.id} 
            name={spotlightData.fields.name} 
            hood={spotlightData.fields.hood} 
            note={spotlightData.fields.note}
            noteHeadline={spotlightData.fields.noteHeadline}
            src={spotlightData.fields.image[0].url}
            features={spotlightData.fields.features}
            /> 
        </Link>
        ))}
      </SimpleGrid>
      <Divider />
      <Heading>Weitere Cafes</Heading>
      <SimpleGrid minChildWidth='250px' spacing={8} py={8}>
      {coffeeData.map((coffeeData) => (
        <Link href={`/detail/${spotlightData.id}`} unstyled>
          <CoffeeCard 
            key={coffeeData.id} 
            name={coffeeData.fields.name} 
            hood={coffeeData.fields.hood} 
            features={coffeeData.fields.features}
          />
        </Link>
      ))}
      </SimpleGrid>
    </Container>
    
  )
}
