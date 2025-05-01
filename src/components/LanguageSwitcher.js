import { HStack, Button } from '@chakra-ui/react';

export default function LanguageSwitcher({ lang, setLang }) {
  return (
    <HStack spacing={2}>
      <Button
        variant={lang === 'EN' ? 'solid' : 'outline'}
        colorScheme="teal"
        size="sm"
        onClick={() => setLang('EN')}
      >
        EN
      </Button>
      <Button
        variant={lang === 'FR' ? 'solid' : 'outline'}
        colorScheme="teal"
        size="sm"
        onClick={() => setLang('FR')}
      >
        FR
      </Button>
    </HStack>
  );
}
