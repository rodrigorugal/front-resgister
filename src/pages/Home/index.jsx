import { Box, Button, Flex, Text, useEventListenerMap } from "@chakra-ui/react"

const Home = () => {

    const lista = [
        {
            name: "Rodrigo",
            email: "rodrigo@mail.com",
            password: "1234"
        },
        {
            name: "Luiz",
            email: "luiz@mail.com",
            password: "1234"
        },
        {
            name: "Alex",
            email: "alex@mail.com",
            password: "1234"
        },
        {
            name: "Danilo",
            email: "danilo@mail.com",
            password: "1234"
        },
        {
            name: "David",
            email: "david@mail.com",
            password: "1234"
        },
        {
            name: "João",
            email: "joao@mail.com",
            password: "1234"
        }
    ]

    return(
        <Flex
            w="100%"
            h="100%"
            bgColor="#f8f8f8"
            flexDirection='column'
        >
            <Flex
                w="100%"
                h='12%'
                p='20px'
                alignItems='center'
                justifyContent='space-between'
            >
                <Text
                    fontSize="32px"
                    fontFamily='Arial'
                >Rodrigo</Text>

                <Button
                    p='10px 20px'
                    border='none'
                    borderRadius='20px'
                    bgColor="#FF8906"
                    color='#FFFFFF'
                    fontWeight='bold'
                >Sair</Button>
            </Flex>

            <Flex
                bgColor="#0F0E17"
                w='100%'
                h='88%'
                flexDirection='row-reverse'
                
            >

                <Box
                    as='ul'
                    bgColor="#f8f8f8"
                    w='90%'
                    h='100%'
                    overflow='auto'
                >
                    {
                        lista.map((item, index)=> (
                        <Box
                            as='li'
                            key={index}
                            w='85%'
                            h='20vh'
                            p='20px'
                            mb='30px'
                            bgColor='#0F0E17'
                            color='#FFFFFF'
                            fontFamily='Arial'
                            borderRightRadius='20px'
                        >
                            <Box
                                h='75%'
                            >
                                <Text
                                    as='h3'
                                    fontWeight="bold"
                                    m='15px 0'
                                >{item.name}</Text>
                                <Text>{item.email}</Text>
                            </Box>
                            
                            <Flex
                                h='25%'
                                w='100%'
                                flexDirection='row-reverse'
                            >
                                <Button
                                    w='35%'
                                    p='15px 20px'
                                    fontWeight='bold'
                                    color='#FFFFFF'
                                    border='none'
                                    borderRadius='20px'
                                    bgColor='#FF8906'
                                >
                                    Editar
                                </Button>
                            </Flex>
                        </Box>
                        ))
                    }

                </Box>

            </Flex>

        </Flex>
    )
}

export default Home;