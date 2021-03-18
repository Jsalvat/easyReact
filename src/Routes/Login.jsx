import React, { useState } from "react";
import { Input,Text, InputRightElement, Button, InputGroup, Box, Stack } from "@chakra-ui/react"
import { useHistory } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
      username: undefined,
      password: undefined
    });
    const history = useHistory();
    

    const handleChange = (event, type) => {
      const { value } = event.target;
      console.log(type)
      type === 'user' ?
      setUser(prevState => ({
        ...prevState,
        username: value
      }))
      :
      setUser(prevState => ({
      ...prevState,
      password: value
      }))
    }

const isButtonDisabled = () => {
  if (user.password && user.username ) {
    return false;
  }
  return true
}

const checkAndRedirect = () => {
  if (user.password === 'admin' && user.username === 'admin' ) {
    setLoading(!loading)
    setTimeout(() => {
      history.push('/dashboard')
    }, 3000);
    setLoading(!loading)
  }
}

 return (
     <div className="loginContainer">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" p={4} >
        <Text fontSize="24px" color="teal" mb={4}>Identifícate</Text>
      <Stack spacing={4} >
        <Input placeholder="Email Usuario" size="md" onChange={(e) => handleChange(e, 'user')}/>
        <InputGroup size="md">
          <Input placeholder="Contraseña" type={show ? "text" : "password"}  size="md" onChange={(e) => handleChange(e, 'password')} />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => setShow(!show)} isDisabled={!user.password}>
            {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
        <Button isFullWidth mt={6} colorScheme="teal" onClick={checkAndRedirect} isLoading={loading} isDisabled={isButtonDisabled()}>
          Login
        </Button>
      </Box>
    </div>
 );
}

export default Login;