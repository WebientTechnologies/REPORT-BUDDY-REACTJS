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
import { useLocation } from "react-router-dom";
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
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<CiUser />}
        colorScheme="black"
      />
      <MenuList>
        <MenuItem onClick={() => dispatch(logout())}>Logout</MenuItem>
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

const navBar = [
  { title: "Dashboard", pathname: "/", icon: <AiOutlineHome /> },
  { title: "Fill Form", pathname: "/fill-form", icon: <AiOutlineHome /> },
];

function Sidebar({ param }) {
  return (
    <Box
      h="100vh"
      minH={"100vh"}
      pos={["absolute", "sticky"]}
      display={["none", "block"]}
      zIndex={"10"}
      maxW={"100vw"}
      transition={"all"}
      w="320px"
      transitionDuration={"500ms"}
      top={0}
      px={2}
    >
      <Box position={{ md: "sticky" }} top={"0"} h={"100vh"} px={0}>
        <VStack
          px={0}
          transition={"all"}
          transitionDuration={"500ms"}
          placeContent={"start"}
          placeItems={"start"}
          w="full"
          h="full"
        >
          <VStack w="full" gap={3} h={"100vh"} overflowY={"auto"}>
            <HStack w="full" mt={2} justifyContent={"space-around"}>
              {/* <Img
                    src={
                      "https://ubfactory.in/wp-content/uploads/2023/04/UB-Factory-Website-Official-Loho-New.png"
                    }
                    w={"20"}
                    mb='2'
                    
                    transition={"all"}
                    px={0}
                  /> */}
            </HStack>

            {navBar.map((navItem) => {
              return <NavItem navItem={navItem} param={param} />;
            })}
            <VStack></VStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}

function NavItem({ navItem }) {
  const location = useLocation();
  console.log({ location });
  return (
    <RouterLink to={navItem.pathname} style={{ width: "100%" }}>
      <HStack
        w="100%"
        p={2}
        // bgColor: "gray.50",
        // color: "black",
        // fontWeight: "bold",
        // borderColor: "black",

        bgColor={
          location.pathname === navItem.pathname ? "gray.50" : "transparent"
        }
        textColor={location.pathname === navItem.pathname ? "black" : "black"}
        fontWeight={location.pathname === navItem.pathname ? "bold" : "medium"}
        borderColor={
          location.pathname === navItem.pathname ? "black" : "transparent"
        }
        borderBottom={location.pathname === navItem.pathname ? "2px" : "none"}
        _hover={{ bgColor: "gray.50", color: "black" }}
        rounded={"sm"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"xl"}
          color={
            location.pathname === navItem.pathname ? "brand.500" : "gray.400"
          }
        >
          {navItem.icon}
        </Text>
        <Text
          color={
            location.pathname === navItem.pathname ? "brand.500" : "gray.400"
          }
        >
          {navItem.title}
        </Text>
      </HStack>
    </RouterLink>
  );
}
