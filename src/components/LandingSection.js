import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <Box>
        <Avatar size="xl" name="Pete" src="https://i.pravatar.cc/150?img=7" />
        <Heading as="h6" size="xs" mt={4}>
          {greeting}
        </Heading>
      </Box>
      <Box>
        <Heading as="h2" size="2xl">
          {bio1}
        </Heading>
        <Heading as="h2" size="2xl" mt={4}>
          {bio2}
        </Heading>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
