import * as React from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";

import { useState, useEffect, useCallback } from "react";

import { ForwardRefRenderFunction, forwardRef } from "react";
import { InputProps, inputVariationOptions } from "./interfaces.types";

const inputVariation: inputVariationOptions = {
  error: "error",
  default: "borderInput",
  focus: "text",
  filled: "secondary",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon: Icon, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      setVariation("error");
    }
  }, [error]);
  const handleInputFocus = useCallback(() => {
    if (!error) {
      setVariation("focus");
    }
  }, [error]);
  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl marginBottom="0px" isInvalid={!!error}>
      {!!label && (
        <FormLabel mb="0px" color="text">
          {label}
        </FormLabel>
      )}

      <InputGroup flexDirection="column">
        {Icon && (
          <InputLeftElement color={"placeholder"} mt="2.5">
            <Icon />
          </InputLeftElement>
        )}
        <ChakraInput
          name={name}
          bg="bgInput"
          variant="outline"
          _hover={{ bgColor: "bgInput" }}
          _placeholder={{ color: "placeholder" }}
          _focus={{
            borderColor: "secondary",
            boxShadow: "0 0 0 1px #67A277",
          }}
          size="lg"
          h={["50px", "60px", "60px"]}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          ref={ref}
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(e) => setValue(e.currentTarget.value)}
          {...rest}
        />
        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
