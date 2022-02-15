import { getKnowledge } from '../lib/airtable';
import { SimpleGrid, Container, Heading, Text, Divider,Flex, IconButton,Stack } from '@chakra-ui/react';
import InSpotlightCard from "../components/inSpotlightCard";
import {React, useState} from "react";
import CoffeeCard from '../components/coffeeCard';
import Link from "../components/link";
import KnowledgeCard from '../components/knowledgeCard';
import PageTransition from '../components/pageTransition';

export async function getStaticProps() {
  const knowledgeData = await getKnowledge()
  return {
    props: {
      knowledgeData: knowledgeData
    }
  }
}

export default function Preparation(props) {

  const knowledgeData = props.knowledgeData

  return (
        <Container maxW='container.xl' py='20'>
          <PageTransition>
          <Heading>Information& Zubereitung</Heading>
          <SimpleGrid minChildWidth='250px' spacing={8} py={8}>
          {knowledgeData.map((knowledgeData) => (
            <Link href={`/knowledgeDetail/${knowledgeData.id}`} unstyled>
             <KnowledgeCard 
                key={knowledgeData.id}
                title={knowledgeData.fields.title}
                quan={knowledgeData.fields.quan}
                time={knowledgeData.fields.time}
                temp={knowledgeData.fields.temp}
                src={knowledgeData.fields.image[0].url}
                isEspresso={knowledgeData.fields.isEspresso}
                isPreparation={knowledgeData.fields.isPreparation}
                steps={knowledgeData.fields.steps}
                />
              </Link>
           ))}
           </SimpleGrid>
           </PageTransition>
        </Container>
  )
}
