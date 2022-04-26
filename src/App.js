import { Flex } from "@chakra-ui/react";
import ReactRoute from "./routes/route";

function App() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      bgColor='#f8f8f8'
      alignItems="center"
      justifyContent="center"
    >
      <ReactRoute />
    </Flex>
  );
}

export default App;
