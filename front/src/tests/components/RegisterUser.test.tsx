import React from "react";
import { fireEvent, screen } from "@testing-library/react";
import { render } from "../test-utils";
import { RegisterUser } from "../../components/RegisterForm";

describe("RegisterUser component", () => {
  it("Should be render all labels", () => {
    /**
     * GIVEN the RegisterUser component
     * WHEN it is rendered
     * THEN all labels should be rendered
     */

    const labels = [
      "Nome:",
      "Sobrenome:",
      "Usuário:",
      "Email:",
      "Senha:",
      "Confirmação de Senha:",
      "CEP:",
      "UF:",
      "Cidade:",
      "Rua:",
    ];
    render(<RegisterUser />);
    const inputs = labels.map((labelText) => screen.getByLabelText(labelText));

    inputs.forEach((el) => expect(el).toBeInTheDocument());
  });
});
