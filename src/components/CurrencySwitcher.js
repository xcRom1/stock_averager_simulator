import { HStack, Button } from '@chakra-ui/react';

export default function CurrencySwitcher({ currency, setCurrency }) {
  return (
    <HStack spacing={2}>
      <Button
        variant={currency === 'USD' ? 'solid' : 'outline'}
        colorScheme="purple"
        size="sm"
        onClick={() => setCurrency('USD')}
      >
        $
      </Button>
      <Button
        variant={currency === 'EUR' ? 'solid' : 'outline'}
        colorScheme="purple"
        size="sm"
        onClick={() => setCurrency('EUR')}
      >
        €
      </Button>
    </HStack>
  );
}
