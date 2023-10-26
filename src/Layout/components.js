import {
  Box,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/userAction";

const Profile = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<CiUser />}
        colorScheme="black"
      />
      <MenuList>
        <MenuItem onClick={() => dispatch(logout(navigate))}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

function AdminLayout({ children }) {
  const param = useLocation();

  return (
    <Box
      w={"100vw"}
      pos={"relative"}
      transition={"all"}
      transitionDuration={"500ms"}
      overflow={"hidden"}
      h={"100vh"}
      fontSize={["xx-small", "xx-small", "xs", "sm", "md"]}
    >
      <Flex
        w={"full"}
        transition={"all"}
        transitionDuration={"500ms"}
        h={"100%"}
        gap="0"
      >
        {/* <Sidebar param={param} /> */}
        <Box w="100%" h={"100%"} overflowY="auto" bg='#2B3674'>
          <HStack w="full" p={3} bg="gray.200" justify={"end"} >
            <Profile />
          </HStack>
          <Box h={"full"} w="100%" p={4} bg='#2B3674'>
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminLayout;