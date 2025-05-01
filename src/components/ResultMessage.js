import { Text } from '@chakra-ui/react';

export default function ResultMessage({ result }) {
  if (!result) return null;

  return (
    <Text fontWeight="bold" color="teal.300" textAlign="center">
      {result}
    </Text>
  );
}
