import * as React from "react";
import { Flex, Text, Box, Stack, Button } from "@chakra-ui/react";
import { Input } from "../../components/Input";

import { useUserAuth } from "../../providers/UserAuth";

import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, SubmitHandler } from "react-hook-form";

import { FaEnvelope, FaLock } from "react-icons/fa";
import { ArrayResp, IAddress, RegisterUserData } from "./interfaces.types";
import registerUserSchema from "../../schemas/registerUserSchema";

export const RegisterUser = () => {
  const { registerUser, checkZipCode } = useUserAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<RegisterUserData>({
    resolver: yupResolver(registerUserSchema),
  });

  const [address, setAddress] = React.useState<IAddress>({});

  const checkZipHandler: React.FocusEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    const errorInfo = {
      message: "Cep inválido",
      type: "Zip Code error",
    };
    checkZipCode(value)
      .then(({ localidade, uf }) => {
        clearErrors("zip_code");
        setAddress({ city: localidade, state: uf });
      })
      .catch(() => {
        console.error("Deu ruin");
        setError("zip_code", errorInfo);
      });
  };

  const handleRegisterUser: SubmitHandler<RegisterUserData> = (data) => {
    registerUser(data).catch(({ response }) => {
      (Object.entries(response.data) as ArrayResp).forEach(([key, value]) => {
        setError(key, { message: value });
      });
    });
  };

  return (
    <Flex
      flex="1"
      justifyContent="center"
      flexDirection="column"
      gridGap="10px"
      alignItems="center"
    >
      <Stack
        as="form"
        onSubmit={handleSubmit(handleRegisterUser)}
        width="95%"
        maxWidth="500px"
        bgColor="baseDefault"
        spacing={4}
        boxSizing="border-box"
        padding={["10px 20px", "15px 20px", "15px 20px"]}
        boxShadow="0px 4px 8px 4px rgba(0, 0, 0, 0.25);"
      >
        <Flex
          width="100%"
          flexDirection={["column", "row", "row"]}
          margin="0 auto"
        >
          <Flex
            flex="2"
            justifyContent="center"
            alignItems="center"
            gridGap="5px"
          >
            <Text fontSize={["lg", "2xl", "2xl"]} fontWeight="bold">
              Cadastro de Usuário
            </Text>
          </Flex>
        </Flex>
        <Box w="100%">
          <Input
            placeholder="Nome"
            label={"Nome Completo:"}
            type="text"
            error={errors.first_name}
            {...register("first_name")}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Sobrenome"
            label={"Sobrenome:"}
            type="text"
            error={errors.last_name}
            {...register("last_name")}
          />
        </Box>

        <Box w="100%">
          <Input
            label={"Usuário:"}
            type="text"
            error={errors.username}
            {...register("username")}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Email"
            label={"Email:"}
            type="email"
            error={errors.email}
            {...register("email")}
            icon={FaEnvelope}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Senha"
            label={"Senha:"}
            type="password"
            error={errors.password}
            {...register("password")}
            icon={FaLock}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Confirmação de Senha"
            label={"Confirmação de Senha:"}
            type="password"
            error={errors.passwordTwo}
            {...register("passwordTwo")}
            icon={FaLock}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="12345678"
            label={"CEP:"}
            type="text"
            error={errors.zip_code}
            {...register("zip_code", { onBlur: checkZipHandler })}
            icon={FaLock}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Rua dos Flamboyants"
            label={"Rua:"}
            type="text"
            error={errors.street}
            {...register("street")}
            icon={FaLock}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Cidade"
            label={"Cidade:"}
            type="text"
            error={errors.city}
            {...register("city")}
            icon={FaLock}
            value={address.city ?? ""}
          />
        </Box>

        <Box w="100%">
          <Input
            placeholder="Estado"
            label={"Estado:"}
            type="text"
            error={errors.state}
            {...register("state")}
            icon={FaLock}
            value={address.state ?? ""}
          />
        </Box>
        <Button
          width="100%"
          padding="30px"
          color="baseDefault"
          bgColor="blue.600"
          _hover={{ bgColor: "blue.500" }}
          type="submit"
          value=""
        >
          Cadastrar
        </Button>
      </Stack>
    </Flex>
  );
};
