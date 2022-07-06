import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { AppProvider } from "../providers";

interface AllProviderProps {
  children: React.ReactNode;
}

const AllProviders = ({ children }: AllProviderProps) => (
  <AppProvider>{children}</AppProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
