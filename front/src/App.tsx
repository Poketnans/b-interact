import * as React from "react";
import { VStack, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher/ColorModeSwitcher";
import { RegisterUser } from "./components/RegisterForm";
import { AppProvider } from "./providers";

export const App = () => (
  <AppProvider>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <VStack spacing={8}>
        <RegisterUser />
      </VStack>
    </Grid>
  </AppProvider>
);
