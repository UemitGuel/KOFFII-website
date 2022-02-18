import {
  Container,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  AspectRatio,
  Button,
  Divider,
  Spacer
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";
import { getPreparationByID, getPreparationIDs } from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import FeatureView from "../../components/featureView";
import PageTransition from "../../components/pageTransition";

const PreparationDetailView = ({ preparation }) => {
  const fields = preparation.preparation[0].fields;
  console.log(preparation.preparation[0].fields)

  return (
    <Container maxW={"container.md"}>
      <PageTransition>
        <Stack spacing={10}>
          <Stack>
            {fields.isPreparation ? (
              <Flex>
                <Text
                  color={"green.700"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {fields.quan}
                </Text>
                <Spacer />
                <Text
                  color={"green.700"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Zeit:{fields.time}
                </Text>
                <Spacer />
                <Text
                  color={"green.700"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Temp:{fields.temp}
                </Text>
              </Flex>
            ) : (
              <Text
                color={"green.700"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Thema
              </Text>
            )}
              <Heading>{fields.title}</Heading>
            <Divider background={"green.50"} />
            <AspectRatio ratio={2 / 1}>
              <Flex
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={fields.image[0].url}
                  objectFit={"cover"}
                />
              </Flex>
            </AspectRatio>
          </Stack>
          <Stack>
            <Heading size="md">Feature</Heading>
            <Divider background={"green.50"} />
            <Text whiteSpace="pre-wrap">{fields.steps}</Text>
          </Stack>
        </Stack>
      </PageTransition>
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = await getPreparationIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const preparation = await getPreparationByID(params.id);
  return {
    props: {
      preparation: preparation,
    },
  };
}

export default PreparationDetailView;
