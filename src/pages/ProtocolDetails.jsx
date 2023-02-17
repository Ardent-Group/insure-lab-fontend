import React, {Suspense, lazy, useState} from 'react'
import { Flex, Text, Box, Skeleton, Spinner, Image, 
   Spacer, Select, Divider, Avatar, InputGroup, Input,
    Center, InputRightAddon, InputLeftAddon, Button, HStack, Checkbox, } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer2 from '../components/Footer2';
import arrowLeft from "../assets/arrow-left.svg";
import usdcLogo from '../assets/usdc 1.png'
import {MdArrowDropDown} from 'react-icons/md'
import uniswapLogo from '../assets/uniswap 1.svg'
import secureLogo from '../assets/shield-tick.svg'
import ethereumLogo from '../assets/ethereum 1.svg'
import qrCodeLogo from '../assets/qr-wallet 1.svg'
import walletLogo from '../assets/empty-wallet.svg'
import calendarLogo from '../assets/calendar.svg'
import deleteIcon from '../assets/delete 1.svg'
import { FaPlus } from 'react-icons/fa';
import highRiskIcon from '../assets/Frame 95.svg';

const NavBar = lazy(() => import("../components/Navbar"));
const InsurelabButton = lazy(() => import("../components/InsurelabButton"));

const ProtocolDetails = () => {

   const {id} = useParams();

   const { fontBold, font, font2, root, font3, font4, font5, font6, font7 } = useStyles();

   let navigate = useNavigate();

  return (
    <Box w={"100%"} backgroundColor="bg">
    <Suspense
    //  fallback={<Skeleton isLoaded={false} w={"100%"} h={"48px"}></Skeleton>}
     fallback={<Spinner size="sm" />}
   >
     <NavBar />
   </Suspense>
    <Flex p={"50px"} flexDir={"column"}>
      <Flex flexDir="row" justify="space-between">
        <Flex justify="center" alignItems="center"
         onClick={() => navigate("/protocols")}
         cursor="pointer"
        >
          <Image src={arrowLeft} boxSize="15px" />
        <Spacer ml="10px" />
        <Text {...fontBold}>Portfolio-based Cover Purchase</Text> 
        </Flex>

        <Flex justify="center" alignItems="center">
        <Text {...font}>Covercurrency:</Text> 
        <Spacer ml="10px" />
          <Select placeholder={"USDC"} icon={<MdArrowDropDown />}
          _placeholder={{ color: "#49454F", fontWeight: "500" }}
          _focus={{ boxShadow: "none" }}
          border="1px solid #CFC4C5" 
          borderRadius="20px" h="46px"
          >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        </Flex>
      </Flex>
        
          {/* ---------------------------------------- Tabs -------------------------- */}
         <Flex flexDir="row" justify="space-between" mt="40px">
          <Text {...font2}>Products</Text> 
          <Text {...font2}>Chains</Text> 
          <Text {...font2}>User ID/Covered Address </Text> 
          <Text {...font2}>Cover Amount</Text> 
          <Text {...font2}>Cover Period</Text> 
          <Text {...font2}></Text> 
         </Flex>
         <Divider border="1px solid #645C5E" mt="15px" />
          
          {/* -------------------------------------- Tab Info -------------------------------- */}
         <Flex flexDir="row" justify="space-between" mt="15px" {...root}>
          {/* -------------------------- Detail 1 ----------------------- */}
          <Flex>
            <Avatar boxSize="30px" src={uniswapLogo} mr="8px" />
            <Flex flexDir="column">
                <Text {...font3}>InstaDapp</Text>
                <Flex justify={"center"} alignItems="center">
                 <Image src={secureLogo} boxSize={"20px"} mr="4px" />
                  <Text {...font4}>Smart contract vulnerability</Text>
                </Flex>
            </Flex>
          </Flex>
           {/* -------------------------- Detail 2 ----------------------- */}
          <Flex justify="center" alignItems="center">
            <Avatar boxSize="30px" src={ethereumLogo} mr="8px" />
            <Text {...font5}>Ethereum</Text>
          </Flex>

           {/* -------------------------- Detail 3 ----------------------- */}
            <Flex justify="center" alignItems="center">
            <InputGroup>
            <InputLeftAddon bg="white" h="43px" border="1px solid #B9A7AA"
            _focus={{ boxShadow: "none" }}
            >
                  <Flex justify="space-between" alignItems="center">
                    <Image src={qrCodeLogo} boxSize="20px"  />
                  </Flex>
                </InputLeftAddon>
              <Input type='text' placeholder='Enter the covered address' 
               h="43px" w="200px" 
               border="1px solid #B9A7AA"
               _placeholder={{ color: "#9E8C90", fontSize: "10px" }}
               _focus={{ boxShadow: "none" }}
               />
            </InputGroup>

          </Flex>

            {/* -------------------------- Detail 4 ----------------------- */}
            <Flex justify="center" alignItems="center">
            <InputGroup>
              <Input type='text' placeholder='Enter the covered amount' 
               h="43px" w="150px" border="1px solid #B9A7AA" 
               _placeholder={{ color: "#9E8C90", fontSize: "10px" }}
               _focus={{ boxShadow: "none" }}
               />
               <InputRightAddon bg="footerBgColor" h="43px" border="1px solid #B9A7AA"
               _focus={{ boxShadow: "none" }}
               >
                  <Flex justify="space-between" alignItems="center">
                    <Text color="#4C4546" fontSize="10px" mr="5px">USDC</Text>
                    <Image src={walletLogo} boxSize="20px"  />
                  </Flex>
                </InputRightAddon>
            </InputGroup>

          </Flex>


               {/* -------------------------- Detail 5 ----------------------- */}
               <Flex justify="center" alignItems="center">
            <InputGroup>
              <Input type='text' placeholder='Select cover period' 
               h="43px" w="150px" border="1px solid #B9A7AA" 
               _placeholder={{ color: "#9E8C90", fontSize: "10px" }}
               _focus={{ boxShadow: "none" }}
               />
               <InputRightAddon bg="footerBgColor" h="43px"
                focus={{ boxShadow: "none" }}
               >
                  <Flex justify="space-between" alignItems="center">
                    <Text color="#4C4546" fontSize="10px" mr="5px">Days</Text>
                    <Image src={calendarLogo} boxSize="20px"  />
                  </Flex>
                </InputRightAddon>
            </InputGroup>
          </Flex>
          
          {/* ----------------------------- Delete button ------------------- */}
          <Flex justify="center" alignItems="center">
            <Center>
             <Image src={deleteIcon} boxSize="20px"  />
            </Center> 
          </Flex>
      
         </Flex>

         {/* -------------------------- Add Button ---------------------------------------- */}
         <Flex flexDir="row" justify="space-between" mt="20px">
           <Text></Text>
           <Button leftIcon={<FaPlus />} color="#4C4546" bgColor="#DCE7F9" variant='solid'>
            <Text fontSize="12px">Add more protocols</Text> 
            </Button>
          </Flex>

          <HStack justify="space-between" flexDir="row" mt="30px" p="20px">
            <Flex flexDir={"column"} bg="footerBgColor" p="20px 40px">
              <Flex justify="space-between" flexDir="row">
              <Flex flexDir="column">
                <Text {...font7}>Cover amount left</Text>
                <Text {...font7} mt='10px'>Percentage per cover</Text>
                <Text {...font7} mt='10px'>Risk level</Text> 
                <Text {...font7} mt='10px'>Cover Payment</Text>
              </Flex>

              <Flex flexDir="column" textAlign="right">
                <Text {...font6}>0.0000 USDC</Text>
                <Text {...font6} mt='10px'>0.05%</Text>
                <Flex justify="right" alignItems="center" mt='10px'>
                  <Image src={highRiskIcon} boxSize="15px" />
                  <Text {...font3} >High risk</Text>
                </Flex> 
                <Text>Cover amount left</Text>
              </Flex>
              </Flex>
             
              {/*  connect your wallet */}
              <Box  w='100%' p={4} mt="17px" borderRadius="4px" bg="white"
               boxShadow="0px 4px 8px 3px rgba(0, 0, 0, 0.15)">
                <Flex flexDir="row" justify="space-between">
                  <Text fontSize="14px" fontWeight="400">Please connect your wallet.</Text>
                  <Text fontSize="14px" fontWeight="600" color="#3E7FDF">Connect</Text>
                </Flex>
                
              </Box>

            </Flex>

            <Flex flexDir="column">
              {/* ----------------------------- Check Box ---------------------------- */}
             <Flex mb="20px">
             <Checkbox border="#212121">
              <Text fontWeight="500" maxWidth="400px">I agree to the terms and conditions set out and identified by insurelab.</Text>
             </Checkbox>
             </Flex>
             <Suspense fallback={<Spinner size="sm" />}>
                    <InsurelabButton
                      name={"Confirm insurance"}
                      rest={{
                        width: ["40%"],
                        height: ["50px"],
                        mt: { base: null, md: "10px" },
                        color: "white",
                        bg: "ctaBg",
                        fontWeight: "400"
                      }}
                      // onCLick={}
                    />
                  </Suspense>
            </Flex>
          </HStack>

    </Flex>

      {/* Footer Two */}
      <Footer2 /> 
    </Box>
  )
}

export default ProtocolDetails


const useStyles = () => {
  return {
       root: {
           bg:"white",
           shadow: "0px 4px 61px rgba(0, 0, 0, 0.1)",
           borderRadius: "8px",
           h: "88px",
           p: "18px 15px"
       },
       fontBold: {
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "165%",
       },
       font: {
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "165%",
       },
       font2: {
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "24px",
       },
       font3: {
        fontWeight: "600",
        fontSize: "12px",
        lineHeight: "24px",
       },
       font4: {
        fontWeight: "500",
        fontSize: "8px",
        lineHeight: "24px",
       },
       font5: {
        fontWeight: "400",
        fontSize: "11px",
        lineHeight: "24px",
       },
       font6: {
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "125%",
       },
       font7: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "125%",
       }
  }
}