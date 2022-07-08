import { ReactNode } from "react";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  zip_code: string;
  street: string;
  city: string;
  state: string;
}

export interface UserAuthProps {
  children: ReactNode;
}

export interface UserAuthData {
  user: Partial<User>;
  registerUser: (credentials: RegisterUser) => Promise<void>;
  checkZipCode: (zipCode: string) => Promise<ViaCepResp>;
}

export interface RegisterUser {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
  zip_code: string;
  street: string;
  city: string;
  state: string;
}

export interface ViaCepResp {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export interface ViaCepRespError {
  erro: string;
}

export interface IUserRegisterError {
  [key: string]: Array<string>;
}
