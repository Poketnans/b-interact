import { FieldError } from "react-hook-form";
import { IconType } from "react-icons";
import { InputProps as ChakraInputProps } from "@chakra-ui/react";

export interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

export type inputVariationOptions = {
  [key: string]: string;
};
