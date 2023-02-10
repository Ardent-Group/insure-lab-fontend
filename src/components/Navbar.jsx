import {useState} from "react";
import {  Flex, Button, Link,  HStack, chakra, Text, Image, useBreakpointValue, Box} from '@chakra-ui/react';
import { nanoid } from "nanoid";
import {navbar_data} from '../utils/navbarData';
import  insurelabLogo from '../assets/Logo.svg'
import MobileDrawer from "./mobileDrawer/MobileDrawer";

const CTA = "Connect Wallet"

const Navbar = () => {
     
    const {
        logoFont,
        ctaFont,
      } = useNavbarStyles();

      const [isMenu, setIsMenu] = useState(false);

      const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        px="6"
        py="5"
        align="center"
        justify="space-between"
        bg="navbarBgColor"
        pos="sticky"
        top={0}
        boxShadow="0px 4px 61px rgba(0, 0, 0, 0.1)"
        // zIndex={50000}
      >
       <Link href={"/Home"}>
        <Image src={insurelabLogo} />
        </Link>    
     
        {isDesktop ? (
            <>
             <HStack as="nav" spacing="5">
             {navbar_data.map((item) => (
               <Link key={nanoid()} href={item.link}>
                 <Button variant="nav" fontWeight={400}
                  _focus={{ color: "ctaBg", fontWeight: "600" }}
                  > {item.name} </Button>
               </Link>
             ))}
           </HStack>
           <HStack>
             <Button borderRadius="100px" 
              bg="ctaBg" 
              {...ctaFont}
              _hover={{
               bg: "linear-gradient(0deg, rgba(103, 80, 164, 0.14), rgba(103, 80, 164, 0.14)), #FFFBFE",
               color: "black"
              }}
              >
               {CTA}
             </Button>  
           </HStack>
           </>
          ) : (
            <MobileDrawer />
          )} 
        
      </Flex>
    </chakra.header>
  );
}

export default Navbar;

const useNavbarStyles = () => {
    return {
        logoFont: {
           fontSize: "22px",
           fontWeight: "600",
           lineHeight: "36px",
        },
        ctaFont: {
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            letterSpacing: "0.1px",
            color: "white",
        },
    }
}