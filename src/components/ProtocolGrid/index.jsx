import { Heading, Spacer, Stack, Flex, Text, Avatar, Image, Box, Button } from "@chakra-ui/react";
import React, { lazy, FC, MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import webLogo from '../../assets/link-2.svg'
import secureLogo from "../../assets/shield-tick.svg"
import AvatarLogo from '../../assets/uniswap 1.svg'
import EthereumLogo from '../../assets/ethereum 1.svg'
import waveLogo from '../../assets/mdi_approximately-equal.png'

const ProtocolGrid = ({
  icon,
  cardName,
  onClick,
  link
}) => {
  const { root, text, title, subTitle, title2 } = useStyles();

  return (
    <Stack
      {...root}
      as="button"
      bg="footerBgColor"
      _hover={{  boxShadow: '2xl' }}
      onClick={onClick}
    > 
    <Link to={link}>
      <Flex>
       <Avatar src={AvatarLogo} />
       <Flex flexDir="column" ml="15px" textAlign="left">
        <Text {...title}>{cardName}</Text>
        
        <Flex>
          <Image src={webLogo} w={"15px"} mr="5px" /> 
          <Text {...subTitle}>www.domain.co</Text>
         </Flex>

         <Flex>
          <Image src={secureLogo} w={"15px"} mr="5px" /> 
          <Text {...subTitle}>Smart contract vulnerability</Text>
         </Flex>
       </Flex>
      
      </Flex>

      <Flex justify="space-between" textAlign="left">

        <Flex flexDir="column">
          <Text {...title2}>Chains</Text>
         <Flex mt="10px" justify="center" alignItems="center">
          <Avatar src={EthereumLogo} width="30px" h="30px" mr="10px" />
          <Text {...subTitle}>Ethereum</Text>
         </Flex>
        </Flex>
          <Spacer mr="50px" />
          <Flex flexDir="column">
          <Text {...title2}>Capacity</Text>
         <Flex mt="10px" justify="center" alignItems="center">
          <Avatar src={waveLogo} width="20px" h="20px" mr="10px" />
          <Text {...subTitle}>365.4k USD</Text>
         </Flex>
        </Flex>

      </Flex>

      <Flex justify="space-between" textAlign="start" pt="24px">

       <Flex flexDir="column">
         <Text fontSize="12px" fontWeight="500">Monthly Cover cost</Text>
        <Flex mt="10px" justify="center" alignItems="center">
         <Text {...title}>0.22%</Text>
        </Flex>
       </Flex>
         <Spacer mr="50px" />
         <Flex flexDir="column">
         <Text {...title2}>Risk level</Text>
        <Flex mt="5px" justify="center" alignItems="center">
         <Text {...subTitle} color="#BA1A1A">High risk</Text>
        </Flex>
       </Flex>
       </Flex>

       {/* ------------------------------- Button controller ---------------------------- */}
       <Flex justify="space-between" textAlign="start" pt="24px">

        <Flex flexDir="column">
         <Button color="black" borderRadius="100px" bg="#DCE7F9"
          fontSize="14px" fontWeight={500}
         >
            Create cover
        </Button>
        </Flex>
          <Spacer mr="60px" />
          <Flex flexDir="column">
          <Button color="white" borderRadius="100px" bg="ctaBg"
          fontSize="14px" fontWeight={500}
          >
            Insure
         </Button>
        </Flex>
        </Flex>
     
        </Link>
    </Stack>
  );
};

export default ProtocolGrid;

const useStyles = () => {
  return {
    root: {
      borderRadius: {
        base: "10px",
        md: "16px",
      },
    //   bg: "grey",
      p: ["10px", "15px", "18px", "20px", "25px"],
      h: "345px",
    },
    text: {
      fontSize: ["12px", "14px", "16px", "16px", "20px"],
    },
    title: {
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "24px",
    },
    subTitle: {
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        color: "#4C4546"
    },
    title2: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
    }
  };
};
