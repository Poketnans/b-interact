import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { Input } from "../../components/Input";
import { render } from "../test-utils";
import { FieldError } from "react-hook-form";

describe("Input component", () => {
  it("Should be able to render the cards", () => {
    /**
     * GIVEN the Input component
     * WHEN it is rendered passing placeholder
     * THEN should be shown placeholder
     */
    render(<Input placeholder="test input" name="input" />);
    expect(screen.getByPlaceholderText("test input")).toBeTruthy();
  });

  it("Should be able to render error message", () => {
    /**
     * GIVEN the Input component
     * WHEN it is rendered passing error prop
     * THEN should be shown error message
     */
    const error: FieldError = {
      type: "error",
      message: "required field",
    };

    render(<Input placeholder="error input" name="input" error={error} />);
    const errorLabel = screen.getByText(error.message as string);
    expect(errorLabel).toBeInTheDocument();
  });

  it("should be able to insert values on input", () => {
    /**
     * GIVEN the Input component
     * WHEN I insert some text into the input
     * THEN the text should be the input value
     */
    render(<Input placeholder="Name" name="name" />);
    const input = screen.getByPlaceholderText("Name");
    fireEvent.change(input, { target: { value: "tester" } });
    expect(input).toHaveValue("tester");
  });
});
