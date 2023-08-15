import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import React from "react";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} boxSize='60px' />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
