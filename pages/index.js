import { getCoffeePlaces, getKnowledge, getPlacesInSpotlight } from '../lib/airtable';
import { SimpleGrid, Container, Heading, Text, Divider,Flex, IconButton } from '@chakra-ui/react';
import InSpotlightCard from "../components/inSpotlightCard";
import {React, useState} from "react";
import CoffeeCard from '../components/coffeeCard';
import Link from "../components/link";
import Sidebar from '../components/Sidebar';
import { FiMenu } from 'react-icons/fi'
import KnowledgeCard from '../components/knowledgeCard';

export async function getStaticProps() {
  const coffeeData = await getCoffeePlaces()
  const spotlightData = await getPlacesInSpotlight()
  const knowledgeData = await getKnowledge()
  return {
    props: {
      coffeeData: coffeeData,
      spotlightData: spotlightData,
      knowledgeData: knowledgeData
    }
  }
}


export default function Home(props) {
  const [activeTabs, setActiveTabs] = useState({
    firstTab: true,
    secondTab: false
  })

  function toggleTab() {
    console.log(activeTabs)
    setActiveTabs((previousTabs) => ({
        firstTab: !previousTabs.firstTab,
        secondTab: !previousTabs.secondTab
    }))
  }

  const spotlightData = props.spotlightData
  const coffeeData = props.coffeeData
  const knowledgeData = props.knowledgeData
  console.log(knowledgeData)
  console.log(spotlightData)

  return (
    <Flex w="100%">
      <Sidebar activeTabs={activeTabs} toggleTab={toggleTab}/>
      {activeTabs.firstTab &&
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
      }
      {activeTabs.secondTab &&
        <Container maxW='container.xl' py='20'>
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
        </Container>
      }
    </Flex>
    
  )
}
