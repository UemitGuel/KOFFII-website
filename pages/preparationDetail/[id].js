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
  Spacer,
  SimpleGrid,
  Link
} from "@chakra-ui/react";
import { MdMap } from "react-icons/md";
import {
  getPreparationByID,
  getPreparationIDs,
  getTwoRandomCafes,
} from "../../lib/airtable";
import { chakra, useColorModeValue } from "@chakra-ui/react";
import PageTransition from "../../components/pageTransition";
import CoffeeCard from "../../components/coffeeCard";

const PreparationDetailView = ({ preparation, cafeProps }) => {
  const fields = preparation.preparation[0].fields;
  const coffeeData = cafeProps.twoRandomCafes;

  return (
    <Container maxW={"container.md"}>
      <PageTransition>
        <Stack spacing={10}>
          <Stack>
            {fields.isPreparation ? (
              <Flex>
                <Text
                  color={useColorModeValue('neutral.900', 'neutralD.900')}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {fields.quan}
                </Text>
                <Spacer />
                <Text
                  color={useColorModeValue('neutral.900', 'neutralD.900')}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  Zeit:{fields.time}
                </Text>
                <Spacer />
                <Text
                  color={useColorModeValue('neutral.900', 'neutralD.900')}
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
                color={useColorModeValue('neutral.900', 'neutralD.900')}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Thema
              </Text>
            )}
            <Heading>{fields.title}</Heading>
            <Divider />
            <AspectRatio ratio={2 / 1}>
              <Flex
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
            <Divider />
            <Text whiteSpace="pre-wrap">{fields.steps}</Text>
          </Stack>
          <Stack>
            <Heading size="md">Kennst du schon?</Heading>
            <Divider />
            <SimpleGrid minChildWidth="250px" spacing={8}>
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
  const cafeProps = await getTwoRandomCafes();

  return {
    props: {
      preparation: preparation,
      cafeProps: cafeProps,
    },
  };
}

export default PreparationDetailView;
