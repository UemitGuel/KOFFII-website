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
import { getCoffeePlaceIDs, getPlaceByID } from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import FeatureView from "../../components/featureView";
import PageTransition from "../../components/pageTransition";

const DetailView = ({ place, apiKey }) => {
  const fields = place.place[0].fields;

  function openMaps() {
    window.open(fields.url, "_blank");
  }

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
          {fields.image[0].url && (
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
          )}
                    </Stack>
          <Stack>
            <Heading size="md">Feature</Heading>
            <Divider background={"green.50"} />
            <FeatureView features={fields.features} />
            </Stack>

          {fields.noteHeadline && (
            <Stack>
              <Heading size="md">Notizen</Heading>
              <Divider background={"green.50"} />
              <Text color={"gray.500"} fontSize={"lg"}>
                {fields.note}
              </Text>
            </Stack>
          )}
          <Stack>
            <Heading size="md">Karte</Heading>
            <Divider background={"green.50"} />
            <Button
              w="100%"
              onClick={openMaps}
              leftIcon={<MdMap />}
              colorScheme="green"
              variant="solid"
            >
              In Google Maps anzeigen
            </Button>
            <AspectRatio ratio={2 / 1}>
              <Flex
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <iframe
                  width="100%"
                  height="450"
                  loading="lazy"
                  allowfullscreen
                  src={
                    "https://www.google.com/maps/embed/v1/place?q=place_id:" +
                    fields.placeID +
                    "&key=" +
                    apiKey
                  }
                ></iframe>
              </Flex>
            </AspectRatio>
          </Stack>
        </Stack>
      </PageTransition>
    </Container>
  );
};

export async function getStaticPaths() {
  const paths = await getCoffeePlaceIDs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const place = await getPlaceByID(params.id);
  const apiKey = process.env.GOOGLE_MAPS_API;
  // ...
  return {
    props: {
      place: place,
      apiKey: apiKey,
    },
  };
}

export default DetailView;
