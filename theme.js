import { extendTheme } from "@chakra-ui/react";
import { sand, sandDark, gold, goldDark, bronze, bronzeDark, olive, oliveDark } from "@radix-ui/colors";
import { mode } from '@chakra-ui/theme-tools'
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

  console.log(output)
  return output;
};

const radixNeutral = transformRadixToChakraFormat(sand);
const radixNeutralDark = transformRadixToChakraFormat(sandDark);
const goldNeutral = transformRadixToChakraFormat(sand);
const goldNeutralDark = transformRadixToChakraFormat(sandDark);

const theme = extendTheme({
    styles: {
        global: (props) => ({
          body: {
            bg: mode('neutral.100', 'neutralD.50')(props),
          },
        }),
      },
  colors: {    
    neutral: {
      ...goldNeutral,
    },
    neutralD: {
      ...goldNeutralDark,
    },
  },
});

export default theme;
