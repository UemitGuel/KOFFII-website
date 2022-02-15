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
import { getKnowledgeIDs, getKnowledgeByID } from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import Head from 'next/head';

const KnowledgeDetailView = ({knowledge}) => {
    const fields = knowledge.knowledge[0].fields

    return (
        <Text>{fields.title}</Text>
    )
}

export async function getStaticPaths() {
    const paths = await getKnowledgeIDs()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    const knowledge = await getKnowledgeByID(params.id)
    return {
        props: {
            knowledge: knowledge
        }
      }
  }

export default KnowledgeDetailView;

