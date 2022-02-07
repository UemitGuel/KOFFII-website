import { Text } from "@chakra-ui/react";
import { getCoffeePlaceIDs, getPlaceByID } from "../../lib/airtable";
import React from "react";

const DetailView = ({place}) => {
    const fields = place.place[0].fields

    return (
        <Text>{fields.name}}</Text>
    )
};
export async function getStaticPaths() {
    const paths = await getCoffeePlaceIDs()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const place = await getPlaceByID(params.id)
    // ...
    return {
        props: {
          place: place
        }
      }
  }

export default DetailView;



