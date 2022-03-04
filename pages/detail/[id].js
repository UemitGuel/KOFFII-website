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
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";
import {
  getCoffeePlaceIDs,
  getPlaceByID,
  getTwoRandomPreparations,
} from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import FeatureView from "../../components/featureView";
import PageTransition from "../../components/pageTransition";
import PreparationCard from "../../components/preparationCard";

const DetailView = ({ place, apiKey, preparationProps }) => {
  const fields = place.place[0].fields;
  const hasImage = fields.image != null;
  const preparationData = preparationProps.twoRandomPreparations;

  function openMaps() {
    window.open(fields.url, "_blank");
  }

  return (
    <Container maxW={"container.md"}>
      <PageTransition>
        <Stack spacing={10}>
          <Stack>
            <Text
              color={"green.500"}
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
            <Divider />
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
                  src={hasImage ? fields.image[0].url : "/genericCafe.jpg"}
                  objectFit={"cover"}
                />
              </Flex>
            </AspectRatio>
            {!hasImage && (
              <Text size="sm"> *Zurzeit noch ein Platzhalter Foto </Text>
            )}
          </Stack>
          <Stack>
            <Heading size="md">Feature</Heading>
            <Divider />
            <FeatureView features={fields.features} />
          </Stack>

          {fields.noteHeadline && (
            <Stack>
              <Heading size="md">Notizen</Heading>
              <Divider/>
              <Text fontSize={"lg"}>
                {fields.note}
              </Text>
            </Stack>
          )}
          <Stack>
            <Heading size="md">Karte</Heading>
            <Divider />
            <Button
              w="100%"
              onClick={openMaps}
              leftIcon={<MdMap />}
              colorScheme='linkedin'
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
          <Stack>
            <Heading size="md">Wusstest du schon?</Heading>
            <Divider />
            <SimpleGrid minChildWidth="250px" spacing={8}>
              {preparationData.map((preparationData) => (
                <Link
                  href={`/preparationDetail/${preparationData.id}`}
                  unstyled
                >
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
  const place = await getPlaceByID(params.id);
  const apiKey = process.env.GOOGLE_MAPS_API;
  const preparationProps = await getTwoRandomPreparations();
  return {
    props: {
      place: place,
      apiKey: apiKey,
      preparationProps: preparationProps,
    },
  };
}

export default DetailView;
