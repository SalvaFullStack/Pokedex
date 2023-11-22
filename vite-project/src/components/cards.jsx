import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function CardComponent({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <Card bg="#F57D31" pb="500px">
        <Heading pt="4" maxWidth="600px">
          <Text pl="4" fontSize="2xl" color="white">
            {pokemon ? pokemon.name : "Nombre Pokemon"}
          </Text>
        </Heading>
        <Container mb="500px" mt="4" bg="white" p="4">
          <Button colorScheme="#F57D31">Button</Button>
          <CardHeader mb="4"></CardHeader>
        </Container>
      </Card>
    </>
  );
}

export default CardComponent;
