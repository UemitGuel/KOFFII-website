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
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";
import { getPreparationByID, getPreparationIDs } from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import FeatureView from "../../components/featureView";
import PageTransition from "../../components/pageTransition";

const PreparationDetailView = ({ preparation }) => {
  const fields = preparation.preparation[0].fields;
  const hasImage = fields.image != null
  console.log(hasImage)

  return (
    <Container maxW={"container.md"}>
      <PageTransition>
        <Stack spacing={10}>
          <Stack>
          <Text
            color={"green.700"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {fields.hood}
          </Text>
          {fields.noteHeadline != null ? (
            <Heading>{fields.name}</Heading>
          ) : (
            <Heading>
              {fields.name} - {fields.noteHeadline}
            </Heading>
          )}
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
                  src={hasImage ? fields.image[0].url : '/genericCafe.jpg'}
                  objectFit={"cover"}
                />
              </Flex>
            </AspectRatio>
            {!hasImage && <Text size="sm"> *Zurzeit noch ein Platzhalter Foto </Text>}
                    </Stack>
          <Stack>
            <Heading size="md">Feature</Heading>
            <Divider background={"green.50"} />
            <FeatureView features={fields.features} />
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
      preparation: preparation
    },
  };
}

export default DetailView;

