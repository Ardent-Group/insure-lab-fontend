import {  
  Flex,
  Button, 
  HStack, 
  chakra,  
  Image, 
  useBreakpointValue, 
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  useDisclosure,
  Center
} from '@chakra-ui/react';
import {ChevronDownIcon} from '@chakra-ui/icons'
import { nanoid } from "nanoid";
import {navbar_data} from '../utils/navbarData';
import  insurelabLogo from '../assets/Logo.svg'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MobileDrawer from "./mobileDrawer/MobileDrawer";
//connect wallet
import { ConnectInsureLab } from "../utils/customConnect";


const Navbar = () => {

      let navigate = useNavigate();

      const isDesktop = useBreakpointValue({ base: false, lg: true })
      const {isOpen, onOpen, onClose} = useDisclosure()
      const {isOpen: profileIsOpen, onOpen: profileOnOpen, onClose: profileOnClose} = useDisclosure()

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
                  _focus={{ color: "ctaBg", fontWeight: "600" }}
                  > {item.name} </Button>
               </Link>
             ))}
              <Flex alignItems={'left'}>
              <Menu isOpen={isOpen}>
               <MenuButton
                 px={2}
                 py={1}
                 _hover={{ color: "ctaBg", boxShadow: 'none', fontWeight: "600"}}
                 onMouseEnter={onOpen}
                 onMouseLeave={onClose}
                 w={{lg: "135px"}}
               >
                <Flex>
                  Governance
                  <Center>
                    <ChevronDownIcon />
                  </Center>
                </Flex>
               </MenuButton>
               <MenuList border="none" onMouseEnter={onOpen} onMouseLeave={onClose} mt={-1}>
                  <MenuItem _hover={{bg: 'ctaBg', color: "white" }}
                  onClick={() => navigate("/governance")}
                   >Governance</MenuItem>
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                 onClick={() => navigate("/governance-claims")}
                  >Proposals</MenuItem>
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                 onClick={() => navigate("/dao-members")}
                 >Members</MenuItem>
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                 onClick={() => navigate("/dao-member-portal")}
                 >Governance Profile</MenuItem>
              </MenuList>
              </Menu>
          </Flex>
            <Flex>
            <Menu isOpen={profileIsOpen}>
               <MenuButton
                 px={2}
                 py={1}
                 _hover={{ color: "ctaBg", boxShadow: 'none', fontWeight: "600"}}
                 onMouseEnter={profileOnOpen}
                 onMouseLeave={profileOnClose}
                 w={{lg: "135px"}}
               >
                <Flex>
                  Profile
                  <Center>
                    <ChevronDownIcon />
                  </Center>
                </Flex>
               </MenuButton>
               <MenuList border="none" onMouseEnter={profileOnOpen} onMouseLeave={profileOnClose} mt={-1}>
                  <MenuItem _hover={{bg: 'ctaBg', color: "white" }}
                  onClick={() => navigate("/risk-assessor-dashboard")}
                   >Dashboard</MenuItem>
                 <MenuItem _hover={{ bg: 'ctaBg', color:"white" }}
                 onClick={() => navigate("/insurer-dashboard")}
                  >Insurer Dashboard</MenuItem>
              </MenuList>
              </Menu>
            </Flex>
           </HStack>
          
           <HStack>
             <ConnectInsureLab />
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

export const useNavbarStyles = () => {
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