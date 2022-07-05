import * as yup from "yup";

const registerUserSchema = yup.object().shape({
  first_name: yup.string().required("Campo Obrigatório!!"),
  last_name: yup.string().required("Campo Obrigatório!"),
  username: yup.string().required("Campo Obrigatório!"),
  email: yup.string().required("Email Obrigatório!").email("Email inválido"),
  password: yup
    .string()
    .required("Campo Obrigatório!")
    .min(8, "Mínimo 8 caracteres!"),
  passwordTwo: yup
    .string()
    .required("Campo Obrigatório!")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem!"),
  zip_code: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/([0-9]{8})/gi, "Precisa de 8 dígitos! Exemplo : 12345678"),
  street: yup.string().required("Campo Obrigatório!"),
  city: yup.string().required("Campo Obrigatório!"),
  state: yup.string().required("Campo Obrigatório!"),
});

export default registerUserSchema;
