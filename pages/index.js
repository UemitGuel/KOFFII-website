import { getCoffeePlaces } from '../lib/places';
import { Box } from '@chakra-ui/react';
import CoffeeCard from "../components/coffeeCard";
import React from "react";


export async function getStaticProps() {
  const allPostsData = await getCoffeePlaces()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home(props) {
  console.log(props)
  const object = props.allPostsData[0]
  console.log(object)

  return (
    <CoffeeCard name={object.fields.Name} hood={object.fields.hood} />
  )
}
