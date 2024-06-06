import { Container, Text, VStack, Heading, Button, IconButton } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">
          Welcome to My Website
        </Heading>
        <Text fontSize="lg">This is an empty project. Start building your awesome application!</Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <IconButton aria-label="Launch Rocket" icon={<FaRocket />} size="lg" />
      </VStack>
    </Container>
  );
};

export default Index;
