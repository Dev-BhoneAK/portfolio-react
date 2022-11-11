import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box shadow="md" borderRadius="10px" backgroundColor="#fff" color="#000">
      <VStack spacing={4}>
        <Image src={imageSrc} alt={title} borderRadius="10px 10px 0 0" />
        <VStack spacing={4} align="start" px="5" pb="5">
          <Heading as="h6" size="xs">
            {title}
          </Heading>
          <Text fontSize="xs">{description}</Text>
          <HStack>
            <Text fontSize="xs" as="b">
              See more
            </Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Card;
