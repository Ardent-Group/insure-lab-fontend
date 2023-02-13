import { Heading, Spacer, Stack, Text, Flex } from "@chakra-ui/react";
import React, { lazy, FC, MouseEventHandler } from "react";
import { nanoid } from "nanoid";


const DashboardCardItem = ({
  icon,
  cardName,
  onClick,
}) => {
  const { root, text } = useStyles();


  const BGCOLOR = [
     { 
        id: "1",
        color: "#B6FEA4",
      },
      {
        id: "2",
        bgcolor: "#FCDF96",
      },
      {
        id: "3",
        bgcolor: "#AFD9FF",
      },
  ]

  return (
    <>
     {/* {BGCOLOR.map((e, i) => ( */}
    <Stack
      {...root}
      key={nanoid()}
      as="button"
      color="white"
      // bg={}
      onClick={onClick}
    >
      {icon}
      <Spacer />
      <Flex justify="center" align="center" >
      <Text {...text} textAlign="center">{cardName}</Text>
      </Flex> 
    </Stack>
     {/* ))} */}
    </>
  );
};

export default DashboardCardItem;

const useStyles = () => {
  return {
    root: {
      borderRadius: {
        base: "10px",
        md: "16px",
      },
    //   bg: "grey",
      p: "20px 40px",
      h: "150px",
    },
    text: {
      fontSize: ["16px"],
      fontWeight: ["400"],
      lineHeight: ["165%"]
    },
  };
};
