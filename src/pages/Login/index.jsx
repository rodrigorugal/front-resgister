import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useContext, useHistory } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { api } from "../../service/api";
import { TokenContext } from "../../providers/Token";

const Login = () => {
  const history = useHistory();

  const { addToken } = useContext(TokenContext);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido")
      .required("E-mail de usuário obrigatório "),
    password: yup.string().required("Digite sua Senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handlerLogin = (data) => {
    api
      .post("/login", data)
      .then((response) => {
        addToken(response.data.accessToken);

        history.push("/Home");
      })
      .catch((er) => console.log(er));
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      w="100%"
      h="90%"
    >
      <Text as="h1" fontFamily="Arial" fontWeight="bold" fontSize={28}>
        LOGIN
      </Text>

      <form onSubmit={handleSubmit(handlerLogin)}>
        <Input
          id="email"
          placeholder="Email"
          size="xs"
          type="email"
          {...register("email")}
          border="none"
          bgColor="#2A2A2A"
          borderRadius="20px"
          fontSize="16px"
          color="#FFFFFF"
          p="10px"
          w="80%"
          h="40px"
        />

        <Input
          id="senha"
          placeholder="Senha"
          size="xs"
          type="password"
          {...register("password")}
          border="none"
          bgColor="#2A2A2A"
          borderRadius="20px"
          fontSize="16px"
          color="#FFFFFF"
          p="10px"
          w="80%"
          h="40px"
        />

        <Button
          h="50px"
          w="35%"
          p="10px"
          fontWeight="bold"
          color="#FFFFFF"
          border="none"
          borderRadius="20px"
          bgColor="#FF8906"
          type="submit"
        >
          Entrar
        </Button>
      </form>

      <Link to="../Register/" style={{ color: "#2A2A2A" }}>
        Cadastre-se
      </Link>
    </Flex>
  );
};

export default Login;
