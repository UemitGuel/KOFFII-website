import { extendTheme } from "@chakra-ui/react";
import {
  sand,
  sandDark,
  gold,
  goldDark,
  bronze,
  bronzeDark,
  olive,
  oliveDark,
} from "@radix-ui/colors";
import { mode } from "@chakra-ui/theme-tools";
import { useColorModeValue } from "@chakra-ui/react";

const transformRadixToChakraFormat = (scale) => {
  const output = Object.values(scale).reduce(
    (accumulator, currentValue, index) => {
      if (index === 0) {
        accumulator[`50`] = currentValue;
      } else {
        accumulator[`${index}00`] = currentValue;
      }
      return accumulator;
    },
    {}
  );
  return output;
};

const radixNeutral = transformRadixToChakraFormat(olive);
const radixNeutralDark = transformRadixToChakraFormat(oliveDark);

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark"
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("neutral.100", "neutralD.50")(props),
        colors: mode("white", "black")(props),
      },
    }),
  },
  colors: {
    neutral: {
      ...radixNeutral,
    },
    neutralD: {
      ...radixNeutralDark,
    },
  },
});

export default theme;

//Notes
// useColorModeValue('neutral.100', 'neutralD.100') -> secondaryBackground
