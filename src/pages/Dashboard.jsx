import React, {Suspense, lazy, useState} from 'react'
import { 
  Flex, 
  Box, 
  Text, 
  Spinner, 
  Image, 
  HStack, 
  VStack, 
  SimpleGrid, 
  Stack
} from "@chakra-ui/react"
import Container from '../components/Container';
import Footer from '../components/Footer2';
import { dashCardData } from '../utils/dashCard';
import { nanoid } from 'nanoid';

const NavBar = lazy(() => import("../components/Navbar"));
const DashboardCardItem = lazy(() => import("../components/DashboardCardItem/index"));

const Dashboard = () => {

    const { root } = useStyles();

  return (
    <Box w={"100%"} {...root}>
    <Suspense
        fallback={<Spinner size="md" />}
      >
        <NavBar />
      </Suspense>

      <Suspense
        fallback={<Spinner size="md" />}
      >
        <Container>
        <Stack mt="20px" p="50px">
           
        <Flex>
              <SimpleGrid
                columns={3}
                spacing="40px"
                spacingX={"60px"}
                w={"100%"}
              >
                <Suspense fallback={<Spinner size="sm" />}>
                  {dashCardData.map((e, i) => (
                    <DashboardCardItem
                      key={nanoid()}
                      cardName={e.label}
                    />
                  ))}
                </Suspense>
              </SimpleGrid>
            </Flex>
        </Stack>
      </Container>
      </Suspense>
      

      {/* Footer is here */}
      <Footer />
    </Box>
  )
}

export default Dashboard


const useStyles = () => {
    return {
      root: {
        backgroundColor: "#FBFDFF",
        // w: "100%",
        // mt: "108px",
        // pt: "3%",
        // overflow: "hidden",
        // pb: "3%",
        // px: "0px",
      },

    }

}