import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function CardComponent() {
  return (
    <>
      <Box maxW="960px" mx="auto">
        <Card bg="tomato">
          <CardHeader>
            <Heading maxWidth="600px" bg="white">
              Charmander
            </Heading>
          </CardHeader>
        </Card>
      </Box>
    </>
  );
}

export default CardComponent;
