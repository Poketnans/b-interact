import { useCallback } from "react";
import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { useToast } from "@chakra-ui/react";
import viaCepapi from "../../services/viaCepApi";
import { AxiosError, AxiosResponse } from "axios";
import {
  IUserRegisterError,
  RegisterUser,
  User,
  UserAuthData,
  UserAuthProps,
  ViaCepResp,
  ViaCepRespError,
} from "./interfaces.types";

const UserAuthContext = createContext<UserAuthData>({} as UserAuthData);

export const UserAuthProvider = ({ children }: UserAuthProps) => {
  const toast = useToast();

  const [user, setUser] = useState<Partial<User>>({});

  const checkZipCode = useCallback(
    async (zipCode: string) => {
      const response: AxiosResponse<ViaCepResp | ViaCepRespError> =
        await viaCepapi.get(`/${zipCode}/json`);

      if (response.status != 200 || (response.data as ViaCepRespError).erro) {
        toast({
          position: "top",
          title: "CEP inválido",
          description: "Insira um CEP válido!",
          status: "error",
          duration: 4000,
          isClosable: true,
        });

        throw TypeError;
      }

      return response.data as ViaCepResp;
    },
    [toast]
  );

  const registerUser = useCallback(
    async (data: RegisterUser) => {
      await api
        .post(`/accounts/`, data)
        .then(() => {
          toast({
            position: "top",
            title: "Cadastro realizado!",
            description: "Faça login para acessar o sistema.",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        })
        .catch((error: AxiosError<IUserRegisterError>) => {
          toast({
            position: "top",
            title: "Erro ao se cadastrar!",
            description: error.code == "ERR_NETWORK" && "Problemas de conexão!",
            status: "error",
            duration: 4000,
            isClosable: true,
          });

          throw error;
        });
    },
    [toast]
  );

  return (
    <UserAuthContext.Provider
      value={{
        user,
        registerUser,
        checkZipCode,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);
