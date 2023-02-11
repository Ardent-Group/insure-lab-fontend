import React, {Suspense, lazy, useState} from 'react'
import { Flex, Text, Box, Skeleton, Spinner, Image, 
   Spacer, Select, Divider, Avatar, InputGroup, Input,
    Center, InputRightAddon, InputLeftAddon, Button, } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const NavBar = lazy(() => import("../components/Navbar"));

const ProtocolDetails = () => {

   const {id} = useParams();

   const { fontBold, font, font2, root, font3, font4, font5 } = useStyles();

  return (
    <Box w={"100%"}>
    <Suspense
    //  fallback={<Skeleton isLoaded={false} w={"100%"} h={"48px"}></Skeleton>}
     fallback={<Spinner size="sm" />}
   >
     <NavBar />
   </Suspense>
    <Flex p={"50px"} flexDir={"column"}>
      <Flex flexDir="row" justify="space-between">
        <Flex justify="center" alignItems="center">
        <Link to="/protocols"><Image src={arrowLeft} boxSize="15px" /></Link> 
        <Spacer ml="10px" />
        <Text {...fontBold}>Portfolio-based Cover Purchase</Text> 
        </Flex>

        <Flex justify="center" alignItems="center">
        <Text {...font}>Covercurrency:</Text> 
        <Spacer ml="10px" />
          <Select placeholder={"USDC"} icon={<MdArrowDropDown />}
          _placeholder={{ color: "#49454F", fontWeight: "500" }}
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
            <InputLeftAddon bg="white" h="43px" border="1px solid #B9A7AA">
                  <Flex justify="space-between" alignItems="center">
                    <Image src={qrCodeLogo} boxSize="20px"  />
                  </Flex>
                </InputLeftAddon>
              <Input type='text' placeholder='Enter the covered address' 
               h="43px" w="200px" 
               _placeholder={{ color: "#9E8C90", fontSize: "10px" }}
               />
            </InputGroup>

          </Flex>

            {/* -------------------------- Detail 4 ----------------------- */}
            <Flex justify="center" alignItems="center">
            <InputGroup>
              <Input type='text' placeholder='Enter the covered amount' 
               h="43px" w="150px" border="1px solid #B9A7AA" 
               _placeholder={{ color: "#9E8C90", fontSize: "10px" }}
               />
               <InputRightAddon bg="footerBgColor" h="43px" border="1px solid #B9A7AA">
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
               />
               <InputRightAddon bg="footerBgColor" h="43px" border="1px solid #B9A7AA">
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
           bg: "white",
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
       }
  }
}