import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Input,
  Button,
  VStack,
  Container,
  FormControl,
  FormLabel,
  Stack,
  ColorModeScript,
} from '@chakra-ui/react';

import theme from './theme';
import labels from './constants/labels';
import LanguageSwitcher from './components/LanguageSwitcher';
import CurrencySwitcher from './components/CurrencySwitcher';
import ResultMessage from './components/ResultMessage';

function App() {
  const [lang, setLang] = useState('EN');
  const [currency, setCurrency] = useState('USD');
  const [currentShares, setCurrentShares] = useState('');
  const [averagePrice, setAveragePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  const [result, setResult] = useState(null);

  const l = labels[lang];
  const symbol = currency === 'USD' ? '$' : '€';

  const calculate = () => {
    const s = parseFloat(currentShares);
    const p = parseFloat(averagePrice);
    const c = parseFloat(currentPrice);
    const t = parseFloat(targetPrice);

    if (isNaN(s) || isNaN(p) || isNaN(c) || isNaN(t) || t >= p) {
      setResult(l.error);
      return;
    }

    const totalInvested = s * p;
    const x = (totalInvested - s * t) / (t - c);

    setResult(x > 0 ? l.success(x, c, t, symbol) : l.impossible);
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="dark" />
      <Container maxW="md" py={8}>
        <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="gray.800">
          <VStack spacing={6}>
            <Heading size="lg" textAlign="center">{l.title}</Heading>

            <Stack direction={['column', 'row']} spacing={4} align="center" justify="center" width="100%">
              <LanguageSwitcher lang={lang} setLang={setLang} />
              <CurrencySwitcher currency={currency} setCurrency={setCurrency} />
            </Stack>

            <FormControl>
              <FormLabel>{l.shares}</FormLabel>
              <Input type="number" value={currentShares} onChange={(e) => setCurrentShares(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>{l.avgPrice} ({symbol})</FormLabel>
              <Input type="number" value={averagePrice} onChange={(e) => setAveragePrice(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>{l.currentPrice} ({symbol})</FormLabel>
              <Input type="number" value={currentPrice} onChange={(e) => setCurrentPrice(e.target.value)} />
            </FormControl>

            <FormControl>
              <FormLabel>{l.targetPrice} ({symbol})</FormLabel>
              <Input type="number" value={targetPrice} onChange={(e) => setTargetPrice(e.target.value)} />
            </FormControl>

            <Button colorScheme="blue" onClick={calculate} width="100%">{l.calculate}</Button>
            <ResultMessage result={result} />
          </VStack>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
