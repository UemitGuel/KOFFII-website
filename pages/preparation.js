import { getPreparation } from "../lib/airtable";
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
import PreparationCard from "../components/preparationCard";
import PageTransition from "../components/pageTransition";

export async function getStaticProps() {
  const preparationData = await getPreparation();
  return {
    props: {
      preparationData: preparationData,
    },
  };
}

export default function Preparation(props) {
  const preparationData = props.preparationData;

  return (
    <Container maxW="container.xl">
      <PageTransition>
        <Stack spacing={1}>
          <Heading>Zubereitung& mehr</Heading>
          <Divider />
          <SimpleGrid minChildWidth="350px" spacing={8} py={8}>
            {preparationData.map((preparationData) => (
              <Link href={`/preparationDetail/${preparationData.id}`} unstyled>
                <PreparationCard
                  key={preparationData.id}
                  title={preparationData.fields.title}
                  quan={preparationData.fields.quan}
                  time={preparationData.fields.time}
                  temp={preparationData.fields.temp}
                  src={preparationData.fields.image[0].url}
                  isEspresso={preparationData.fields.isEspresso}
                  isPreparation={preparationData.fields.isPreparation}
                  steps={preparationData.fields.steps}
                />
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </PageTransition>
    </Container>
  );
}
