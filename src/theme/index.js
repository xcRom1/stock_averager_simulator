import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
      input: {
        color: 'white',
        bg: 'gray.700',
      },
      label: {
        color: 'white',
      },
    },
  },
});

export default theme;
