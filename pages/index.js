import { getCoffeePlaces, getPlacesInSpotlight } from "../lib/airtable";
import {
  SimpleGrid,
  Container,
  Heading,
  Text,
  Divider,
  Flex,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import InSpotlightCard from "../components/inSpotlightCard";
import { React, useState } from "react";
import CoffeeCard from "../components/coffeeCard";
import Link from "../components/link";
import PageTransition from "../components/pageTransition";

export async function getStaticProps() {
  const coffeeData = await getCoffeePlaces();
  const spotlightData = await getPlacesInSpotlight();
  return {
    props: {
      coffeeData: coffeeData,
      spotlightData: spotlightData,
    },
  };
}

export default function Home(props) {
  const spotlightData = props.spotlightData;
  const coffeeData = props.coffeeData.sort(function (x, y) {
    console.log(y)
    let a = (x.fields.hood || '').toUpperCase(),
      b = (y.fields.hood || '').toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  })

  return (
    <Container maxW="container.xl">
      <PageTransition>
        <Stack>
          <Stack spacing={1}>
            <Heading>Meine Lieblingscafés</Heading>
            <Divider />
            <SimpleGrid minChildWidth="350px" spacing={8} py={8}>
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
          </Stack>
          <Stack spacing={1}>
            <Heading>Weitere Cafés</Heading>
            <Divider />
            <SimpleGrid minChildWidth="250px" spacing={8} py={8}>
              {coffeeData.map((coffeeData) => (
                  <Link href={`/detail/${coffeeData.id}`} unstyled>
                    <CoffeeCard
                      key={coffeeData.id}
                      name={coffeeData.fields.name}
                      hood={coffeeData.fields.hood}
                      features={coffeeData.fields.features}
                    />
                  </Link>
                ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </PageTransition>
    </Container>
  );
}
