import * as yup from "yup";

const registerUserSchema = yup.object().shape({
  first_name: yup.string().required("Obrigatório!"),
  last_name: yup.string().required("Obrigatório!"),
  username: yup.string().required("Obrigatório!"),
  email: yup.string().required("Obrigatório!").email("Email inválido"),
  password: yup
    .string()
    .required("Obrigatório!")
    .min(8, "Mínimo 8 caracteres!"),
  passwordTwo: yup
    .string()
    .required("Obrigatório!")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem!"),
  zip_code: yup
    .string()
    .required("Obrigatório!")
    .matches(/([0-9]{8})/gi, "Precisa de 8 dígitos! Exemplo : 12345678"),
  street: yup.string().required("Obrigatório!"),
  city: yup.string().required("Obrigatório!"),
  state: yup.string().required("Obrigatório!"),
});

export default registerUserSchema;
