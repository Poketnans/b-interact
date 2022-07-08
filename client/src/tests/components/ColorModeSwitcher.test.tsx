import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../test-utils";
import { ColorModeSwitcher } from "../../components/ColorModeSwitcher";

describe("ColorModeSwitcher component", () => {
  it("Should be render switcher button", () => {
    /**
     * GIVEN the ColorModeSwitcher component
     * WHEN it is rendered
     * THEN should be in the document
     */
    render(<ColorModeSwitcher />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});
