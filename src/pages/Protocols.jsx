import React, {Suspense, lazy, useState} from 'react'
import { Flex, Box, Text, Spinner, Image, HStack, VStack, SimpleGrid, Center, keyframes } from '@chakra-ui/react'
import Footer from '../components/Footer';
import Container from '../components/Container';
import rockTypeImage from '../assets/Rock.svg';
import ProtocolGrid from '../components/ProtocolGrid';
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import { protocolCardData } from '../utils/protocolGrid'
import ReactPaginate from 'react-paginate';
import '../constants/pagination.css'
import {useParams} from "react-router-dom";
import { motion } from 'framer-motion';

const NavBar = lazy(() => import("../components/Navbar"));
const InsurelabButton = lazy(() => import("../components/InsurelabButton"));
const ProtocolFilter = lazy(() => import("../components/ProtocolFilter"));


const animationKeyframes = keyframes`
  0% { transform: rotate(0); }
  25% { transform: rotate(0); }
  100% { transform: rotate(360deg);}
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const Protocols = () => {

    const {
     root,
     protocolBox,
     protocol,
     protocolWelcomeText,
     joinText,
     protocolInnerBox2,
     protocolInnerBox1,
     outerBox,
    } = useStyles();

    let navigate = useNavigate();
    const {id} = useParams();

    const [protocolCard, setProtocolCard] = useState(protocolCardData.slice(0, 30));
    //state holding page of the pagination
    const [pageNumber, setPageNumber] = useState(0);

    const protocolCardPerPage = 15
    const pagesVisited = pageNumber * protocolCardPerPage;

    const  displayProtocolCard = protocolCard
    .slice(pagesVisited, pagesVisited + protocolCardPerPage)
    .map((e) => {
      return (
        <ProtocolGrid 
        key={nanoid()}
        onClick={e.onclick}
        // icon={e.icon({
        //   color: "",
        // })}
        link={e.id}
        icon={""}
        cardName={e.label}
      />
      )
    }) 

    const pageCount = Math.ceil(protocolCard.length / protocolCardPerPage);

    //selected is the pageNumber selected 
    const changePage = ({selected}) => {
       setPageNumber(selected);
    }

  return (
    <Box w={"100%"}>
       <Suspense
        // fallbac k={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
        fallback={<Spinner size="sm" />}
      >
        <NavBar />
      </Suspense>
      
      <Flex {...protocolBox} bgImage="url('/images/Header-banner.png')" mt="40px">
         <Suspense fallback={<Spinner size="sm" />}>
          <Container>
            <HStack {...outerBox}>
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
                    color="black"
                  >
                   Protocol Insurance
                  </Text>

                  <Text
                    {...joinText}
                    color="black"
                    mt="20px"
                    maxW="400px"
                  >
                    Buy insurance cover from protocols that are protected 
                    by us or create a custom protocol cover!
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
                    src={rockTypeImage}
                    // right={"60px"}
                    // bottom={"50px"}
                  />
                </VStack>

                <Flex>
                <Suspense fallback={<Spinner size="sm" />}>
                    <InsurelabButton
                      name={"Insure unlisted protocol"}
                      rest={{
                        width: ["100%"],
                        height: ["50px"],
                        mt: { base: null, md: "10px" },
                        color: "white",
                        bg: "ctaBg",
                        borderRadius: "10px",
                        fontWeight: "400"
                      }}
                      // onCLick={}
                    />
                  </Suspense>
                </Flex>
            </HStack>
          </Container>
         </Suspense>
      </Flex>

      {/* ---------------------------- Search and Filter area -------------------------- */}
      <Flex h={"40px"} w={"100%"}>
         <Suspense
        // fallbac k={<Skeleton isLoaded={true} w={"100%"} h={"48px"}></Skeleton>}
        fallback={<Spinner size="sm" />}
      >
         <ProtocolFilter />
      </Suspense>
      </Flex>

            <Flex mt="70px" p="50px">
              <SimpleGrid
                columns={3}
                spacing="40px"
                spacingX={"60px"}
                w={"100%"}
              >
                <Suspense fallback={<Spinner size="sm" />}>
                  {/* {protocolCard.map((e, i) => (
                    <ProtocolGrid 
                      key={nanoid()}
                      onClick={e.onclick}
                      // icon={e.icon({
                      //   color: "",
                      // })}
                      icon={""}
                      cardName={e.label}
                    />
                  ))} */}
                  {displayProtocolCard}
                  {/* <Flex alignContent={"center"} 
                   justifyContent={"center"}
                    pos="relative"
                   > */}
                   <Center>
                   <ReactPaginate
                   previousLabel={"<"}
                   nextLabel={">"}
                   pageCount={pageCount}
                   onPageChange={changePage}
                   containerClassName={"paginationBttns"}
                   previousClassName={"previousBttns"}
                   nextLinkClassName={'nextBttns'}
                   disabledClassName={'paginationDisabled'}
                   activeClassName={'paginationActive'}
                  >
                  </ReactPaginate>
                  </Center>        
                  {/* </Flex> */}
                </Suspense>
              </SimpleGrid>
            </Flex>
          
       {/* Footer is here */}
       
      <Footer />
    </Box>
  )
}

export default Protocols


const useStyles = () => {
  return {
    root: {
      backgroundColor: "",
      height: "10vh",
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
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
      h: "330px",
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
      overflow: "hidden",
      // zIndex: 3000000,
    },
    homeBox2: {
      h: "750px",
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
      h: "200px",
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
  };
};