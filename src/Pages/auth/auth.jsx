import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import PasswordField from './PasswordFelids';
import { login } from '../../redux/actions/userAction';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    await dispatch(login(email, password));
    setLoading(false);
    setEmail("");
    setPassword("");
  }


  return (
    <Container h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <VStack p={[2, 6]} justifyContent={'center'} spacing={'4'} border='1px solid blue' boxShadow='0px 18px 40px 0px #7090B01F' rounded={'lg'} width="sm">
        <Heading size={['md', 'lg']} color='#2B3674"' children={'Welcome'} />
        <form onSubmit={(e) => submitHandler(e)} action="" style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Adress" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@email.com"
              type="email"
              focusBorderColor="brand.500"
            />
          </Box>
          <Box my={'4'}>
            <PasswordField
              value={password}
              onChange={setPassword}
            />
          </Box>
          <Box>
          </Box>
          <Button
            isLoading={Loading}
            my={'4'} bg="#2B3674"
            _hover={{ bg: "gray.700" }}
            color="white"
            rounded="md"
            ml={"auto"}
            type='submit' w="full">Login</Button>
        </form>
      </VStack>
    </Container>
  );
};

export default Login;
