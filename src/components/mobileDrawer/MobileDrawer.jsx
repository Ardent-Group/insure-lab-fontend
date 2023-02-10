import React, {useRef} from "react";
import { useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import DrawerBg from "./DrawerBg";
import {  IoMdMenu } from 'react-icons/io';
import { Link } from 'react-scroll';
import { navbar_data } from "../../utils/navbarData";
import { nanoid } from "nanoid";


export default function MobileDrawer() {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

return (
    <Flex >
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      
      <DrawerBg
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {navbar_data.map((item) => (
            <Link key={nanoid()}>
              <Button variant='text' > {item.name} </Button>
            </Link>
          ))}
        </VStack>
      </DrawerBg>
    </Flex>
  );
};