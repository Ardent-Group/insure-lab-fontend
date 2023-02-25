import React, {Suspense, lazy} from 'react'
import { useState } from 'react';
import { Flex, Box, Spinner, Text, Image, Spacer, Button,
    Input,
    InputRightAddon,
    InputGroup,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    useToast
} from '@chakra-ui/react';
import Footer2 from '../components/Footer2';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/arrow-left.svg';
import walletIcon from '../assets/empty-wallet.svg';
import { useContractWrite, useWaitForTransaction, useAccount, useContractRead } from 'wagmi';
import { erc20Setup, insureLabSetup } from '../constants/interactionSetup';
import { ethers } from 'ethers';
import { insureLabContract } from '../constants/interactionSetup';
import { ConnectInsureLab } from '../utils/customConnect';
import { useNavigate } from 'react-router-dom';
import { HexToDecimal, RiskLevel } from '../hooks/helpers';

const NavBar = lazy(() => import("../components/Navbar"));

const UnlistedCreate = () => {
  const toast = useToast()
  const navigate = useNavigate();



     const {root} = useStyles();


     const [protocolName, setProtocolName] = useState('')
     const [domainLink, setDomainLink] = useState('')
     const [amountCovered, setAmountCovered] = useState('')
     const [description, setDescription] = useState('')
     const [sliderValue, setSliderValue] = useState(0)
     const [sliderInput, setSliderInput] = useState(0)

     const {address} = useAccount();


     // approve token
     
     const { data:tokenData, isLoading:tokenLoading, write: tokenWrite } = useContractWrite({
      mode: "recklesslyUnprepared",
      ...erc20Setup,
      functionName: "approve",
      args: [
        insureLabContract,
        ethers.utils.parseEther(amountCovered ? amountCovered.toString() : "0")
      ]
     })


     const { isLoading: tokenWaitLoading } = useWaitForTransaction({
      hash: tokenData?.hash,
      onSuccess(){
        createNewInsure();
        toast({
          title: 'Token Approved',
          description: "You've successfully approved token",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right"
        })

      },
      onError(data){
        console.log("on error error", data);
        toast({
          title: "Error encountered",
          description: data,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right"
        })
      }
     })

     const { data:newInsureData, isLoading:newInsureLoading, write:createNewInsure } = useContractWrite({
      mode: "recklesslyUnprepared",
      ...insureLabSetup,
      functionName: "createNewInsure",
      args: [
        protocolName,
        domainLink,
        description,
        ethers.utils.parseEther(amountCovered ? amountCovered.toString() : "0"),
        sliderInput
      ]
     })

     const { isLoading: InsureWaitLoading } = useWaitForTransaction({
      hash: newInsureData?.hash,
      onSuccess(){
        toast({
          title: 'Cover Created',
          description: "You've successfully created cover",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right"
        })
        navigate(-1);
      },
      onError(data){
        toast({
          title: "Error encountered",
          description: data,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right"
        })
      }
     })

     const { data:tokenReadData} = useContractRead({
      ...erc20Setup,
      functionName: "allowance",
      args: [
        address,
        insureLabContract
      ]
     })
     




     function tokenAuthorization(){
      let amountInput = ethers.utils.parseEther(amountCovered ? amountCovered.toString() : "0")
      if( HexToDecimal(tokenReadData?._hex) >= HexToDecimal(amountInput?._hex)){
        createNewInsure()
      }
      else{
        tokenWrite()
      }
     }


     const handleSubmit = (e) => {
      e.preventDefault();
      tokenAuthorization()
     }



  return (
    <Box w={"100%"} {...root}>
    <Suspense
     fallback={<Spinner size="sm" />}
   >
     <NavBar />
   </Suspense>

      <Flex padding={"40px 140px"} flexDir="column" mt="30px">
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
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            type='text'
                            value={protocolName}
                            onChange={e => setProtocolName(e.target.value)}
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
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            type='text'
                            value={domainLink}
                            name='domainLink'
                            onChange={e => setDomainLink(e.target.value)}
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
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none"}}
                            type='number'
                            value={amountCovered}
                            onChange={e => setAmountCovered(e.target.value)}
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
                              fontSize: "10px"
                            }}
                            _focus={{ boxShadow: "none" }}
                            text='text'
                            value={description}
                            onChange={e => setDescription(e.target.value)}
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
                        onChangeEnd={val => setSliderInput(RiskLevel(val)) }
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
            {
              address ?
              <Button
                bg="#3E7FDF"
                borderRadius="20px"
                p="10px 140px"
                color="white"
                fontSize="14px"
                fontWeight="400"
                type='button'
                onClick={handleSubmit}
                disabled={ tokenLoading || tokenWaitLoading || newInsureLoading || InsureWaitLoading }
              >
                {(tokenLoading || tokenWaitLoading || newInsureLoading || InsureWaitLoading) ? "Loading..." : "Confirm Insurance"}
              </Button> :
              <ConnectInsureLab />
            }
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

