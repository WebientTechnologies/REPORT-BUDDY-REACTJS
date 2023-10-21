import {
  Box,
  Flex,
  HStack,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { MdGirl } from "react-icons/md";
import { TbBrandBooking, TbServicemark } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
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
          <Box h={"100%"} w="100%" p={4} bg='#2B3674'>
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default AdminLayout;