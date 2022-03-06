import react from "react"
import CoffeeCard from "./coffeeCard";
import {
    Box,
    useColorModeValue,
    Link,
    Heading,
    Stack,
    Divider,
    SimpleGrid,
  } from "@chakra-ui/react";

const HoodSection = ({sectionTitle, data}) => {
    return (
        <Stack spacing={1}>
            <Heading>{sectionTitle}</Heading>
            <Divider />
            <SimpleGrid minChildWidth="250px" spacing={8} py={8}>
              {data.map((coffeeData) => (
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
    )
}

export default HoodSection;