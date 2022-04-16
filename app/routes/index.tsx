import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";

export default function Index() {
  return (
    <Box as="section" bg="bg-surface">
      <Container py={{ base: "16", md: "24" }}>
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading size={useBreakpointValue({ base: "sm", md: "md" })}>
              Ready to Grow?
            </Heading>
            <Text color="muted" maxW="2xl" textAlign="center" fontSize="xl">
              With this beautiful and responsive React components you will
              realize your next project in no time.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button variant="secondary" size="lg">
              Learn more
            </Button>
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
