import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack p="10px" justifyContent="space-between">
      <Image src={logo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
