import { getCoffeePlaces } from '../lib/places';
import { SimpleGrid, Box } from '@chakra-ui/react';
import CoffeeCard from "../components/coffeeCard";
import React from "react";


export async function getStaticProps() {
  const allPlacesData = await getCoffeePlaces()
  return {
    props: {
      allPlacesData
    }
  }
}


export default function Home(props) {
  const placesData = props.allPlacesData
  console.log(placesData)

  return (
    <Box padding='16'>
      <SimpleGrid columns={5} spacing={8}>
      {placesData.map((placesData) => (
        <CoffeeCard key={placesData.id} name={placesData.fields.name} hood={placesData.fields.hood} notes={placesData.fields.notes} />
      ))}
      </SimpleGrid>
    </Box>
    
  )
}
