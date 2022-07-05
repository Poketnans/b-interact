import * as React from "react";
import { ChakraProvider, Box, VStack, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { RegisterUser } from "./components/RegisterForm";
import { AppProvider } from "./providers";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppProvider>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <RegisterUser />
          </VStack>
        </Grid>
      </Box>
    </AppProvider>
  </ChakraProvider>
);
