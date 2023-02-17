import React, {Suspense, lazy, useState} from 'react'
import { 
  Flex, 
  Box, 
  Text, 
  Spinner, 
  Image, 
  HStack, 
  VStack, 
  keyframes, 
  Skeleton, useDisclosure,
  Stack,
  Select,
  Divider
} from '@chakra-ui/react'
import Footer from '../components/Footer3';
import Container from '../components/Container';
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../constants/pagination.css'
import {useParams} from "react-router-dom";
import { motion } from 'framer-motion';
import blockChainPartLogo from '../assets/chains.svg'
import {memberList} from '../utils/dashCard';
import useCollapse from 'react-collapsed';
import "react-sweet-progress/lib/style.css";


const NavBar = lazy(() => import("../components/Navbar"));
const MemberFilter = lazy(() => import("../components/memberFilter"));


const animationKeyframes = keyframes`
  0% { transform: rotate(360deg); }
  100% { transform: rotate(0);}
`;

const animation = `${animationKeyframes} 3s ease-in-out infinite`;

const Members = () => {

    const {
     root,
     protocolBox,
     protocol,
     protocolWelcomeText,
     joinText,
     protocolInnerBox2,
     protocolInnerBox1,
     outerBox,
     fontBold
    } = useStyles();

    let navigate = useNavigate();
    const {id} = useParams();

    const { isOpen, onOpen, onClose } = useDisclosure();
    // ------------------ useDisclosure for TransactionLoaderModal component
    const {
      isOpen: transactionLoadingIsOpen,
      onOpen: transactionLoadingOnOpen,
      onClose: transactionLoadingOnClose
    } = useDisclosure();

    const [isTransactionLoading, setIsTransactionLoading] = useState(false);

    const [buttonHere, setButtonHere] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
  return (
    <Box w="100%">
       <Suspense
        // fallbac k={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
        fallback={<Spinner size="sm" />}
      >
        <NavBar />
      </Suspense>
   
    <Flex w={"100%"} {...root} flexDir="column">
      <Flex {...protocolBox} bgImage="url('/images/proposal-bg.png')">
         <Suspense fallback={<Spinner size="sm" />}>
          <Container>
            <HStack {...outerBox} flexDir="row" justify="space-between">
                  {/* LEFT */}
                  <Flex
                  {...protocolInnerBox1}
                  flexDir={"column"}
                  display={{ base: "none", md: "flex" }}
                  alignItems={{ base: "center", md: "flex-start" }}
                  mt= "80px"
                >
                  <Text
                    {...protocolWelcomeText}
                    color="white"
                  >
                   Governance DAO Members
                  </Text>

                </Flex>

                {/* Center */}
                <VStack
                  {...protocolInnerBox2}
                  display={{ base: "none", md: "flex" }}
                  // pos={"relative"}
                  as={motion.div}
                  animation={animation}
                >
                  <Image
                    src={blockChainPartLogo}
                    // right={"60px"}
                    // bottom={"50px"}
                  />
                </VStack>

            </HStack>
          </Container>
         </Suspense>
      </Flex>
    
      {/* ---------------------------- Search and Filter area -------------------------- */}
      <Flex w={"100%"}>
         <Suspense
        // fallbac k={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
        fallback={<Spinner size="sm" />}
      >
         <MemberFilter />
      </Suspense>
      </Flex>

      <Suspense fallback={<Spinner size="sm" />}>
        <Container>
        <Stack p="60px" flexDir="column" mt="-50px">
          <Flex flexDir="column"
             bg="white"
             boxShadow="0px 4px 61px rgba(0, 0, 0, 0.1)"
             p="40px"
             borderRadius="20px"
             border="1px solid #6750A4"
          >
               <Flex flexDir="row" justify="space-between" mt="30px">
                <Text color="#352F30" fontWeight="500" fontSize="14px">ID</Text> 
                <Text color="#352F30" fontWeight="500" fontSize="14px">Member address</Text> 
                <Text color="#352F30" fontWeight="500" fontSize="14px">Balance</Text> 
                <Text color="#352F30" fontWeight="500" fontSize="14px">Percentage of DAO</Text> 
                <Text color="#352F30" fontWeight="500" fontSize="14px">Voting Power</Text> 
                {/* <Text ></Text>  */}
               </Flex>

               <>
               {memberList.map((e, i) => (
               <Flex flexDir="row" justify="space-between" mt="30px" key={nanoid()}
                borderBottom="1px solid #B8D0FF"
               >
                <Text color="#6750A4" fontSize="16px">{e.id}</Text> 
                <Text fontWeight="600" color="#645C5E" fontSize="16px">{e.address}</Text> 
                <Text fontWeight="600" color="#645C5E" fontSize="16px">{e.balance}</Text> 
                <Flex justify="center"alignItems="start">
                 <Text fontWeight="600" color="#645C5E" fontSize="16px">{e.percentage}</Text> 
                </Flex>
                <Text fontWeight="600" color="#645C5E" fontSize="16px">{e.voting}</Text> 
               </Flex>
                 ))}
                  {/* <Divider border="1px solid " mt="12px" /> */}
               </>
         </Flex>
       </Stack>
          </Container>
       </Suspense>
    
       
      <Footer />
    </Flex>
    </Box>
  )
}

export default Members


const useStyles = () => {
  return {
    root: {
      backgroundColor: "#FBFDFF",
      // height: "10vh",
      // borderBottomLeftRadius: 20,
      // borderBottomRightRadius: 20,
    },
    protocol: {
      color: "red",
      fontSize: 40,
      paddingInline: 30,
    },
    protocolWelcomeText: {
       fontSize: "25px",
       width: "100%",
       fontWeight: "600",
       lineHeight: "165%",
       color: "black",
    },
    protocolBox: {
      h: "300px",
      w: "100%",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      pt: "50px",
      px: {
        base: "0%",
        md: "5%",
      },
      mb: "30px"
    },
    protocolInnerBox1: {
      w: {
        base: "60vw",
        md: "30vw",
      },
      h: "90%",
    },
    protocolInnerBox2: {
      w: {
        base: "50vw",
        md: "35vw",
      },
      h: "90%",
      // overflow: "hidden",
      // // zIndex: 3000000,
    },
    homeBox2: {
      h: "600px",
      w: "100%",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      pt: "",
      px: {
        base: "0%",
        md: "5%",
      },
    },
    outerBox: {
      bg: "transparent",
      h: "180px",
      w: "100%",
      justify: "space-evenly",
    },
    outerBox2: {
      // h: "500px",
      // w: "100%",
      mt: "100px",
      justify: "space-evenly",
    },
    joinText: {
      fontSize: ["18px"],
      width: "100%",
      color: "white",
      my: {
        base: "18px",
        md: "25px",
      },
      fontWeight: "500"
    },
    fontBold: {
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "165%",
     },
  };
};