import React, {   useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import {useDispatch, useSelector} from 'react-redux'
import { register } from '../../Redux/actions/userAction';
import PasswordField from './PasswordFelids';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setHomeChefName] = useState('');
  const [mobile, setMobile] = useState('');
  const { loading} = useSelector(state => state.user);

const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {name,
    email,
    mobile ,
    password,
    role: 'Admin'}
    // debugger
    dispatch(register(formData, email, password));

  };
  return (
    <Container h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}  my={12}>
              <from style={{ width: '100%' }}>

        <VStack p ={[2,8]} justifyContent={'center'} spacing={'4'} boxShadow={'lg'}rounded={'lg'} width="md" maxW = "full" align = "start">
        <Heading   size = {['md','lg']}>
Register
        </Heading>

          <Box w="full" >
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              required
              id="name"
              value={name}
              onChange={(e) => setHomeChefName(e.target.value)}
              placeholder="Your Name"
              type="text"
              focusBorderColor="brand.500"
            />
          </Box>

      

          <Box w="full" >
            <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
            <Input
              required
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Mobile Number"
              type="tel"
              focusBorderColor="brand.500"
            />
          </Box>

          <Box w="full" >
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              type="email"
              focusBorderColor="brand.500"
            />
          </Box>

      <Box w="full" >
        <PasswordField
       
          value={password}
          onChange={setPassword}
        
        />
      </Box>

      <Button  colorScheme="brand" type="button" onClick={handleSubmit} w="full">
        Register
      </Button>

      <Box w="full" >
        New User?{' '}
        <Link to="/login">
          <Button mx="2px" colorScheme="brand"  variant = 'link' isLoading = {loading}>
            Sign in
          </Button>
        </Link>{' '}
        here
      </Box>

  </VStack>
  </from>

</Container>
);
};

export default Register;



