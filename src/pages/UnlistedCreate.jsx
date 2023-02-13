import React, {Suspense, lazy} from 'react'
import { Flex, Box, Spinner, Text, Image, Spacer, Button,
    Input,
    InputRightAddon,
    InputGroup,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/arrow-left.svg';
import walletIcon from '../assets/empty-wallet.svg';

const NavBar = lazy(() => import("../components/Navbar"));

const UnlistedCreate = () => {

     const {root} = useStyles();

  return (
    <Box w={"100%"} {...root}>
    <Suspense
     // fallbac k={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
     fallback={<Spinner size="sm" />}
   >
     <NavBar />
   </Suspense>

      <Flex padding={"40px 80px"} flexDir="column" mt="30px">
       <Flex>
            <Flex justify="center" alignItems="center"> 
             <Link to="/protocols"><Image src={arrowLeft} boxSize="15px" /></Link>
             <Spacer mr="5px" />
              <Text fontSize="18px" fontWeight="600">Create insurance cover for unlisted protocol</Text> 
            </Flex>  
            </Flex>
            <Text fontSize="14px" fontWeight={500} mt="8px">
               Please fill in the following information to list a protocol for insurance
            </Text>   

              <Flex mt="20px" flexDir="column" p="40px">

                <Flex flexDir="row" justify="space-between">
                  {/* ------------------------------- Input 1 ------------------------------- */}
                 <Flex flexDir="column">
                      <Text fontSize="15px" fontWeight="500">Protocol name</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter protocol name"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                          />
                        </InputGroup>
                </Flex>

                     {/* ------------------------------- Input 2 ------------------------------- */}
                 <Flex flexDir="column">
                      <Text fontSize="15px" fontWeight="500">Domain link</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter the link to the protocol"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                          />
                        </InputGroup>
                </Flex>

                </Flex>

                <Flex flexDir="row" justify="space-between" mt="30px">
                     
                  {/* ------------------------------- Input 3 ------------------------------- */}
                  <Flex flexDir="column">
                      <Text fontSize="15px" fontWeight="500">Amount Covered</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"80%"}
                        >
                          <Input
                            placeholder="Enter amount of insurance cover"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none"}}
                          />
                          <InputRightAddon borderRadius={0} border="0" bg="footerBgColor">
                           <Text fontSize="12px" fontWeight={500}>USDC</Text>
                           <Image src={walletIcon} ml="4px" boxSize="20px" />
                          </InputRightAddon>
                        </InputGroup>
                  </Flex>

                     {/* ------------------------------- Input 4 ------------------------------- */}
                   <Flex flexDir="column">
                      <Text fontSize="15px" fontWeight="500">Description</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter the description of the protocol"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                          />
                        </InputGroup>
                </Flex>

                </Flex>
              
                  {/* ------------------------------- Input 4 ------------------------------- */}
                   <Flex flexDir="column" mt="30px">
                      <Text fontSize="15px" fontWeight="500">Description</Text>
                        <Spacer />
                        <Flex flexDir="column" mt="20px">
                        <Text>10</Text>
                        <Slider aria-label='slider-ex-1' defaultValue={10}
                        onChangeEnd={(val) => console.log(val)}
                        >
                          <SliderTrack>
                            <SliderFilledTrack border="2px solid #837377" />
                          </SliderTrack>
                          <SliderThumb bg="#9BFF9F" borderRadius="30px" border="1px solid #837377" />
                        </Slider>
                        <Flex flexDir="row" justify="space-between">
                          <Text fontSize="10px" fontWeight={500}>Low Risk</Text>
                          <Text fontSize="10px" fontWeight={500}>High Risk</Text>
                        </Flex>
                        </Flex>
                 </Flex>
        
              </Flex> 
              
          <Flex justifyContent={"center"} align="center">
            <Button bg="#3E7FDF"
              borderRadius="20px"
              p="10px 140px"
              color="white"
              fontSize="14px"
              fontWeight="400"
              >
              Confirm insurance
            </Button>
          </Flex>
      </Flex>

      {/* Footer here */}
      <Footer2 />
   </Box>
  )
}

export default UnlistedCreate

const useStyles = () => {
    return {
      root: {
        backgroundColor: "#FBFDFF",
      },

    }
}
