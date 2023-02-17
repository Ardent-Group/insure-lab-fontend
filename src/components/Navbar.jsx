import {useState} from "react";
import {  
  Flex,
  Button, 
  HStack, 
  chakra, 
  Text, 
  Image, 
  useBreakpointValue, 
  Box,
  Menu,
  MenuItem,
  MenuButton,
  Avatar,
  MenuList,
  MenuDivider,
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import { nanoid } from "nanoid";
import {navbar_data} from '../utils/navbarData';
import  insurelabLogo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MobileDrawer from "./mobileDrawer/MobileDrawer";

const CTA = "Connect Wallet"

const Navbar = () => {
     
    const {
        logoFont,
        ctaFont,
      } = useNavbarStyles();

      const [isMenu, setIsMenu] = useState(false);
      const [isVisible, setIsVisible] = useState(false);

      let navigate = useNavigate();

      const isDesktop = useBreakpointValue({ base: false, lg: true })


  return (
    <chakra.header id="header">
      <Flex
        w="100%"
        // px="6"
        // py="5"
        align="center"
        justify="space-between"
        bg="navbarBgColor"
        pos="sticky"
        top={0}
        boxShadow="0px 4px 61px rgba(0, 0, 0, 0.1)"
        // zIndex={50000}
        p="20px 100px"
      >
       <Link to="/">
        <Image src={insurelabLogo} />
      </Link>    
     
        {isDesktop ? (
            <>
             <HStack as="nav" spacing="5">
             {navbar_data.map((item) => (
               <Link key={nanoid()} to={item.link}
               >
                 <Button variant="nav" fontWeight={400}
                  // transition="opacity 400ms ease"
                  _focus={{ color: "ctaBg", fontWeight: "600" }}
                  // _focusVisible={{ outline: "3px solid ctaBg" }}
                  > {item.name} </Button>
               </Link>
             ))}
              <Flex alignItems={'left'}>
           <Menu>
            <Flex justify="center" align="center">
             <Link to="/governance">
              <Text  _focus={{ color: "ctaBg", fontWeight: "600"  }}>
                Governance
              </Text>
            </Link> 
            </Flex>
               <MenuButton
                 px={2}
                 py={1}
                 _focus={{ boxShadow: 'none', color: "ctaBg", fontWeight: "600"  }}
                 showOnHover="true"
               >
                 <ChevronDownIcon />
               </MenuButton>
               <MenuList border="none">
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                  onClick={() => navigate("/governance-claims")}
                 >
                  Proposals
                </MenuItem>

                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                   onClick={() => navigate("/dao-members")}
                  >
                    Members
                  </MenuItem>
                 {/* <MenuDivider /> */}
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                  onClick={() => navigate("/dao-member-portal")}
                  >
                    Governance Profile
                  </MenuItem>
                  
                </MenuList>
              </Menu>
          </Flex>
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