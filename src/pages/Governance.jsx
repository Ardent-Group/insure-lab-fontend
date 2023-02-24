import React, {Suspense, lazy, useContext} from 'react'
import {Flex, 
        Box, 
        Spinner, 
        HStack, 
        Spacer,
        Modal,
        ModalOverlay,
        ModalContent,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        Button,
        Text,
        Image,
        useDisclosure,
        Input,
        InputRightAddon,
        InputGroup,
      } from "@chakra-ui/react";
import Container from '../components/Container';
import Footer from '../components/Footer';
import arrowRight from '../assets/arrow-right.svg';
import arrowRightWhite from '../assets/arrow-right-white.svg';
import rounded from '../assets/rounded.svg';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loaderAnimation from '../lottie/9833-full-page-loading-spinner.json';
import successAnimation from '../lottie/90646-payment-success.json'
import walletIcon from '../assets/empty-wallet.svg'
import { StopScreenMessageContext } from '../constants/stopScreenMessage';
import StopErrorMessage from '../components/StopErrorMessage';

const NavBar = lazy(() => import("../components/Navbar"));
const InsurelabButton = lazy(() => import("../components/InsurelabButton"));

const style = {
  height: 250,
};


const Governance = () => {

    const {
      root,
      home,
      homeBox,
      outerBox,
      textDesign,
      homeInnerBox1,
      homeInnerBox2,
      homeInnerBox3,
    } = useStyles();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

    const { isMobile } = useContext(StopScreenMessageContext);

  return (
    <>
   {!isMobile ?
    <Box>
      <Suspense
        // fallback={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
        fallback={<Spinner size="lg" />}
      >
        <NavBar />
      </Suspense>
    <Box w={"100%"}>
      <Flex flexDir="column" 
        {...root}
        bgImage="url('/images/noiselayer.png')"
       >
         <Suspense fallback={<Spinner size="sm" />}>
          <Container>
            <HStack {...homeBox} textAlign="center" 
              justifyContent="center"
              alignItems="center" 
              flexDir="column"
              >
                <Text {...textDesign} bgClip='text'>Creating a new, fairer, and more secure future for insurance.</Text>
                <Text fontSize="24px" fontWeight="500" pb="34px">As a DAO, we are owned and governed by our community. 
                  By joining InsureLab's DAO, you will have the opportunity 
                  to directly shape the future of insurance and play an active 
                  role in decision-making processes..
                </Text>
                <Suspense fallback={<Spinner size="sm" />}>
                    <InsurelabButton
                      name={"Join Governance DAO"}
                      rest={{
                        width: ["30%"],
                        height: ["50px"],
                        mt: { base: null, md: "10px" },
                        color: "white",
                        bg: "ctaBg",
                        fontWeight: "400"
                      }}
                      onCLick={onOpen}
                    />
                  </Suspense>
            </HStack>
          </Container>
         </Suspense>
         
           <Flex flexDir="row" justify="space-between" mt="40px">

             <Flex border="1px solid #837377" bg="#FFF0FC" p="30px" flexDir="column">
               <Text fontSize="23px" textAlign="start">
                 View and vote for claims
                 and issues raised by insurers and risk assessors.
                </Text>
                <Flex mt="30px">
                <Link to="/governance-claims">
                <Flex justify="center" alignItems="center"> 
                 <Text fontSize="16px" fontWeight="600">View feeds</Text> 
                 <Spacer mr="5px" />
                  <Image src={arrowRight} boxSize="15px" />
                  </Flex> 
                  </Link>
                </Flex>
                
             </Flex>


             <Flex border="1px solid #837377" bg="#FFFEEC" p="30px" flexDir="column">
               <Text fontSize="23px" textAlign="start">
                View all the members of our DAO and the role
                played in shaping the future of Insurance.
                </Text>
                <Flex mt="30px">
                <Link to="/dao-members">
                <Flex justify="center" alignItems="center"> 
                 <Text fontSize="16px" fontWeight="600">View members</Text> 
                  <Spacer mr="5px" />
                  <Image src={arrowRight} boxSize="15px" />
                  </Flex>
                  </Link>
                </Flex>
                
             </Flex>


             <Flex border="1px solid #837377" bg="#E9F2FF" p="30px" flexDir="column">
               <Text fontSize="23px" textAlign="start">
               View and manage your activities 
               and contributions to the Governance DAO 
                </Text>
                <Flex mt="30px">
                <Link to="/dao-member-portal">
                <Flex justify="center" alignItems="center"> 
                 <Text fontSize="16px" fontWeight="600">View Portal</Text> 
                 <Spacer mr="5px" />
                 <Image src={arrowRight} boxSize="15px" />
                  </Flex> 
                  </Link>
                </Flex>
                
             </Flex>

            </Flex>

            <Flex {...homeBox} justify="center" align="center" mt="40px">
              <Flex 
              bg="linear-gradient(97.66deg, #0B354D 0%, #000000 100%)" 
              borderRadius="20px"
              // h="400px"
              //  bgImage="url('/images/noiselayer.png')"
              p="40px"
              justify="space-between"
              flexDir="row"
              >
              <Flex flexDir="column" {...homeInnerBox1} justify="center">
                 <Text color="white" fontSize="36px" fontWeight="600">
                  Utilizing power of decentralized
                 technology to revolutionize the insurance industry.
                 </Text>
                 <Suspense fallback={<Spinner size="sm" />}>
                 {/* <Link to="/join"> */}
                 <Button bg="#3E7FDF" mt="25px" borderRadius="10px" 
                 p="0px 6px" 
                 w="30%"
                 _hover={{ color: "white" }}
                 onClick={onOpen}
                 >
                    <Text fontSize="16px" color="white">Join us</Text>
                    <Image src={arrowRightWhite} boxSize="15px" />
                  </Button>
                  {/* </Link> */}
                  </Suspense>
                </Flex>
              
                  <HStack
                  {...homeInnerBox3}
                  display={{ base: "none", md: "flex" }}
                >
                  <Image
                    src={rounded}
                    right={"60px"}
                    bottom={"50px"}
                  />
                </HStack>
              </Flex>
            </Flex>
         </Flex>

              {/* =--------------------------------- Joining Modal ---------------------- */}
            <>
            <Modal isOpen={isOpen} onClose={onClose}
        isCentered
        blockScrollOnMount={true}
        scrollBehavior={"inside"}
        motionPreset="slideInBottom"
        >
        <ModalOverlay bg="#00000020" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent w={{ base: "90vw", md: "60vw" }} borderRadius={0}>
          <ModalCloseButton />
          <ModalBody p="40px 80px">
            {/*  ---------------------- Loading animation ------------------------ */}
            <Lottie
              animationData={loaderAnimation}
              style={style}
              />
              {/* --------------- ends of Loading animation -------------------- */}
              <Flex flexDir="column" justify="center">
                 <Text fontSize="20px" textAlign={"center"} 
                 fontWeight={600}>Welcome to Insurelab’s Governance DAO!</Text>    
                
                  
                <Text fontSize="16px" textAlign={"center"} 
                 fontWeight={400} mt="8px">
                  To join the DAO, you must meet the following conditions:
                    You must have maximum of 10,000 usd and a minimum of 1000 usd
                 </Text> 
                
                </Flex> 
 
          </ModalBody>

          <ModalFooter justifyContent="center" align="center">
            <Button 
             bg="#3E7FDF"
             borderRadius="20px" 
             color="white"
             fontSize="14px"
             fontWeight={400}
             p="10px 100px"
             _hover={{
                color: "white"
             }}
             onClick={onOpen2}
             >
              Connect Wallet
            </Button>
          </ModalFooter>
        </ModalContent>
            </Modal>  
            </>

          {/* ------------------------------ Prceed with this Details ------------------------- */}
          <Modal isOpen={isOpen2} onClose={onClose2} size='3xl'
            isCentered
            blockScrollOnMount={true}
            scrollBehavior={"inside"}
            motionPreset="slideInBottom"
          >
          <ModalOverlay bg="#00000020" backdropFilter="auto" backdropBlur="2px" />
            <ModalContent w={{ base: "90vw", md: "60vw" }} borderRadius={0} >
              <ModalCloseButton />
          <ModalBody padding={"40px 80px"}>
              <Text fontSize="16px" fontWeight={600}>
                Enter the following details to proceed
              </Text>

              <Flex mt="20px" flexDir="column" p="20px">
                 {/* ------------------------------- Input 1 ------------------------------- */}
                 <Flex flexDir="column">
                      <Text fontSize="15px" fontWeight="500">Name (Your identitiy will be kept anonymous)</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter name"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none" }}
                          />
                        </InputGroup>
                </Flex>

                  {/* ------------------------------- Input 2 ------------------------------- */}
                  <Flex flexDir="column" mt="30px">
                      <Text fontSize="15px" fontWeight="500">Amount Staked</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter amount of insurance cover"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none"}}
                          />
                          <InputRightAddon borderRadius={0} border="0" bg="footerBgColor">
                           <Text fontSize="12px" fontWeight={500}>USDC</Text>
                           <Image src={walletIcon} ml="4px" boxSize="20px" />
                          </InputRightAddon>
                        </InputGroup>
                </Flex>
              </Flex>
          </ModalBody>

          <ModalFooter justifyContent={"center"} align="center">
            <Button bg="#3E7FDF"
              borderRadius="20px"
              p="10px 140px"
              color="white"
              fontSize="14px"
              fontWeight="400"
              // onClick={transactionLoadingOnOpen}
              onClick={onOpen3}
              >
                Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
          </Modal>

          
     {/* ------------------------------ Tran saction Completed ---------------------------- */}

      <>
      <Modal isOpen={isOpen3} onClose={onClose3}
        isCentered
        blockScrollOnMount={true}
        scrollBehavior={"inside"}
        motionPreset="slideInBottom"
        >
        <ModalOverlay bg="#00000020" backdropFilter="auto" backdropBlur="2px" />
        <ModalContent w={{ base: "90vw", md: "60vw" }} borderRadius={0}>
          <ModalCloseButton />
          <ModalBody p="40px 80px">
            {/*  ---------------------- Success animation ------------------------ */}
            <Lottie
              animationData={successAnimation}
              style={style}
              />
              {/* --------------- ends of Loading animation -------------------- */}
              <Flex flexDir="column" justify="center">
                 <Text fontSize="18px" textAlign={"center"} 
                 fontWeight={600}>Transaction Completed</Text>

                 <Flex flexDir="row" justify="space-between" mt="15px">
                        <Text fontSize="18px" fontWeight={500}>Amount Staked</Text>
                        <Flex justify="center" alignItems="center">
                            {/* <Image src={uniswapLOGO} boxSize="25px" /> */}
                            <Text color="#645C5E" fontSize="16px"
                             fontWeight={600}
                              >
                                8,000 USDC
                              </Text>
                        </Flex>
                 </Flex>
              </Flex>


              <Flex flexDir="row" justify="space-between" mt="10px">
                        <Text fontSize="18px" fontWeight={500}>Wallet address</Text>
                        <Flex justify="center" alignItems="center">
                            <Text color="#645C5E" fontSize="16px"
                             fontWeight={600}
                             >
                                0x8b93...8b0F
                                </Text>
                        </Flex>
                 </Flex>
           
          </ModalBody>

          <ModalFooter justifyContent="center" align="center">
            <Link to="/dao-member-portal">
            <Button 
             bg="#3E7FDF"
             borderRadius="20px" 
             color="white"
             fontSize="14px"
             fontWeight={400}
             p="10px 100px"
             _hover={{
                color: "white"
             }}
             >
              Veiw Profile
            </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal> 
      </>
       {/* Footer area */}
       <Footer />
    </Box>
    </Box>
     : 
     <StopErrorMessage />
    }
    </>
  )
}

export default Governance


const useStyles = () => {
  return {
    root: {
      backgroundColor: "#FBFDFF",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      // borderBottomLeftRadius: 20,
      // borderBottomRightRadius: 20,
    },
    home: {
      color: "red",
      fontSize: 40,
      paddingInline: 30,
    },
    textDesign: {
      fontSize: "57px",
      fontWeight: "600",
      lineHeight: "165%",
      letterSpacing: "-0.02em",
      bg: "linear-gradient(97.66deg, rgba(50, 28, 107, 0.7) 0%, rgba(255, 53, 211, 0.7) 100%)",
      backgroundClip: "text",
      textFillColor: "transparent",
    },
    homeInnerBox1: {
      w: {
        base: "20vw",
        md: "40vw",
      },
      h: "",
    },
    homeInnerBox3: {
      w: {
        base: "40vw",
        md: "35vw",
      },
      h: "100%",
      overflow: "hidden",
      // zIndex: 3000000,
    },
    homeBox: {
      h: "550px",
      w: "100%",
      pt: "20px",
      bgRepeat: "no-repeat",
      bgSize: "cover",
      // height: "10vh",
      px: {
        base: "0%",
        md: "5%",
      },
      mb: "30px"
    },
    outerBox: {
      bg: "transparent",
      h: "300px",
      w: "100%",
    },
    joinText: {
      fontSize: ["16px"],
      width: "100%",
      color: "white",
      my: {
        base: "18px",
        md: "25px",
      },
      fontWeight: "400"
    },
  };
};
