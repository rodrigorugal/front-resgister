import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const [lista, setLista] = useState([
    {
      name: "Rodrigo",
      email: "rodrigo@mail.com",
      password: "1234",
    },
    {
      name: "Luiz",
      email: "luiz@mail.com",
      password: "1234",
    },
    {
      name: "Alex",
      email: "alex@mail.com",
      password: "1234",
    },
    {
      name: "Danilo",
      email: "danilo@mail.com",
      password: "1234",
    },
    {
      name: "David",
      email: "david@mail.com",
      password: "1234",
    },
    {
      name: "João",
      email: "joao@mail.com",
      password: "1234",
    },
  ]);

  const handleInputValue = (item) => {
    for (let i = 0; i < lista.length; i++) {
      if (i.email === item.email) {
        setLista();
      }
    }
  };

  return (
    <Flex w="100%" h="100%" bgColor="#f8f8f8" flexDirection="column">
      <Flex
        w="100%"
        h="12%"
        p="20px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="32px" fontFamily="Arial">
          Rodrigo
        </Text>

        <Button
          p="10px 20px"
          border="none"
          borderRadius="20px"
          bgColor="#FF8906"
          color="#FFFFFF"
          fontWeight="bold"
        >
          Sair
        </Button>
      </Flex>

      <Flex
        bgColor="#f8f8f8"
        w="100%"
        h="88%"
        flexDirection="column"
        alignItems="center"
      >
        <Box as="ul" w="90%" h="100%" overflow="auto">
          {lista.map((item, index) => (
            <Box
              as="li"
              key={index}
              w="100%"
              h="20vh"
              p="20px"
              mb="30px"
              bgColor="#2A2A2A"
              color="#FFFFFF"
              fontFamily="Arial"
              borderRadius="20px"
              borderTop="4px solid #FF8906"
            >
              <Box h="75%">
                <Text as="h3" fontWeight="bold" m="15px 0">
                  {item.name}
                </Text>
                <Text>{item.email}</Text>
              </Box>
              <Flex w="100%" alignItems="center" justifyContent="space-between">
                <Input
                  id="email"
                  placeholder="Nome"
                  size="xs"
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  border="1px solid #2a2a2a"
                  bgColor="#f9f9f9"
                  borderRadius="20px"
                  fontSize="16px"
                  color="#FFFFFF"
                  p="5px"
                  w="60%"
                  h="35px"
                />
                <Button
                  p="10px 10px"
                  border="1px solid #2a2a2a"
                  borderRadius="20px"
                  bgColor="#FF8906"
                  color="#FFFFFF"
                  fontWeight="bold"
                  onClick={() => handleInputValue(item)}
                >
                  Editar
                </Button>
              </Flex>
            </Box>
          ))}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
