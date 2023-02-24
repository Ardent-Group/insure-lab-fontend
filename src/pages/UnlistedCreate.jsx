import React, {Suspense, lazy} from 'react'
import { useState, useContext } from 'react';
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
import { StopScreenMessageContext } from '../constants/stopScreenMessage';
import StopErrorMessage from '../components/StopErrorMessage';

const NavBar = lazy(() => import("../components/Navbar"));

const UnlistedCreate = () => {

     const {root} = useStyles();

     const [userForm, setUserForm] = useState({
      protocolName: '',
      domainLink: '',
      amountCovered: '',
      description: ''
     })
     const [sliderValue, setSliderValue] = useState(0)


     const handleChange = (e) => {
      setUserForm({...userForm, [e.target.name]: e.target.value});
     }

     console.log(sliderValue, "slider value")
     console.log(userForm, "user form")

     const { isMobile } = useContext(StopScreenMessageContext);

  return (
    <>
    {!isMobile ?
    <Box w={"100%"} {...root}>
    <Suspense
     fallback={<Spinner size="sm" />}
   >
     <NavBar />
   </Suspense>

      <Flex p={"40px 80px"} flexDir="column" mt="30px">
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

              <Flex mt="20px" flexDir="column" p="50px">

                <Flex flexDir="row" justify="space-between">
                  {/* ------------------------------- Input 1 ------------------------------- */}
                 <Flex flexDir="column" w="40%">
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
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            type='text'
                            value={userForm.protocolName}
                            name="protocolName"
                            onChange={handleChange}
                          />
                        </InputGroup>
                </Flex>

                     {/* ------------------------------- Input 2 ------------------------------- */}
                 <Flex flexDir="column" w="40%">
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
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            type='text'
                            value={userForm.domainLink}
                            name='domainLink'
                            onChange={handleChange}
                          />
                        </InputGroup>
                </Flex>

                </Flex>

                <Flex flexDir="row" justify="space-between" mt="30px">
                     
                  {/* ------------------------------- Input 3 ------------------------------- */}
                  <Flex flexDir="column" w="50%">
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
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none"}}
                            type='number'
                            value={userForm.amountCovered}
                            onChange={handleChange}
                            name='amountCovered'
                          />
                          <InputRightAddon borderRadius={0} border="0" bg="footerBgColor">
                           <Text fontSize="12px" fontWeight={500}>USDC</Text>
                           <Image src={walletIcon} ml="4px" boxSize="20px" />
                          </InputRightAddon>
                        </InputGroup>
                  </Flex>

                     {/* ------------------------------- Input 4 ------------------------------- */}
                   <Flex flexDir="column" w="40%">
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
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            text='text'
                            value={userForm.description}
                            onChange={handleChange}
                            name='description'
                          />
                        </InputGroup>
                </Flex>

                </Flex>
              
                  {/* ------------------------------- Input 5 ------------------------------- */}
                   <Flex flexDir="column" mt="30px">
                      <Text fontSize="15px" fontWeight="500">Select the risk level of the protocol</Text>
                        <Spacer />
                        <Flex flexDir="column" mt="35px">
                        <Slider aria-label='slider-ex-6' defaultValue={0} min={0} max={100} step={25}
                        onChange={val => setSliderValue(val)}
                        >
                          <SliderMark
                            value={sliderValue}
                            textAlign='center'
                            color='black'
                            mt='-10'
                            ml={sliderValue === 0 ? 0 : -10}
                            w='12'
                          >
                            {sliderValue}%
                          </SliderMark>
                          <SliderTrack>
                            <SliderFilledTrack border="2px solid #837377" />
                          </SliderTrack>
                          <SliderThumb
                            bg="#9BFF9F"
                            borderRadius="30px"
                            border="2px solid #837377" 
                            _focus={{ boxShadow: "none" }}
                            w="45px"
                            h="22px"
                            ml={sliderValue === 0 ? 5 : -5}
                          />
                        </Slider>
                        <Flex flexDir="row" justify="space-between" mt="4">
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
    : 
      <StopErrorMessage />
     }
   </>
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

