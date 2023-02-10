import { Container as ContainerBox } from "@chakra-ui/react";
import React from "react";

export default function Container({ children, ...props }) {
  return (
    <ContainerBox pos="relative" maxW={"container"} {...props}>
      {children}
    </ContainerBox>
  );
}
