import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    return(
        <Flex
            flexDirection='column'
            alignItems='center'
            justifyContent='space-evenly'
            w='100%'
            h='90%'
        >
            <Text 
                as='h1'
                fontFamily='Arial'
                fontWeight='bold'
                fontSize={28} 
            >
                LOGIN
            </Text>

           
            <Input 
                id='email'
                placeholder='Email' 
                size='xs' 
                type='email'
                value={input}
                onChange={handleInputChange}
                border='none'
                bgColor='#2A2A2A'
                borderRadius='20px'
                fontSize='16px'
                color='#FFFFFF'
                p='10px'
                w="80%"
                h='40px'   
            />

            <Input 
                id='senha'
                placeholder='Senha' 
                size='xs' 
                type='senha'
                value={input}
                onChange={handleInputChange}
                border='none'
                bgColor='#2A2A2A'
                borderRadius='20px'
                fontSize='16px'
                color='#FFFFFF'
                p='10px'
                w="80%"
                h='40px'   
            />


            <Button
                h='50px'
                w='35%'
                p='10px'
                fontWeight='bold'
                color='#FFFFFF'
                border='none'
                borderRadius='20px'
                bgColor='#FF8906'
            >
                Entrar
            </Button>

            <Link to='../Register/' style={{color:'#2A2A2A'}}>Cadastre-se</Link>

        </Flex>
    )
}

export default Login;