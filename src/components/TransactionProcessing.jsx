import React, { useState, useEffect} from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Text,
    Image,
    Button
} from '@chakra-ui/react';
import Lottle from "lottie-react";
import loadingAnimation from '../lottie/98194-loading.json'
import SecureDex from "../assets/SecureDex.svg";



const style = {
    height: 300,
  };

export const TransactionProcessing = ({
    productName,
    productAmount
}) => {

    const { isOpen, onClose} = useDisclosure()
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            blockScrollOnMount={true}
            scrollBehavior={"inside"}
            motionPreset="slideInBottom"
        >
            <ModalOverlay bg="#00000020" backdropFilter="auto" backdropBlur="2px" />
            <ModalContent w={{ base: "90vw", md: "60vw" }} borderRadius={0}>
                <ModalCloseButton />
                <ModalBody p="40px 80px">
                    {/* -------------------- Loading animation ------------------------------- */}
                    <Lottle
                        animationData={loadingAnimation}
                        style={style}
                    />
                    {/* ----------------------ends of Loading animation --------------------- */}
                    <Flex flexDir="column" justify="center">
                        <Text fontSize="18px" textAlign={'center'} fontWeight={600}>Transaction Processing...</Text>

                        <Flex
                        flexDir="row"
                        justify="space-between"
                        mt="10px"
                        >
                            <Text fontSize="18px" fontWeight={500}>Product</Text>
                            <Flex justify="center" alignItems="center">
                                <Image src={SecureDex} boxSize="25px" />
                                <Text color="#645C%E" fontSize="16px">{productName}</Text>
                            </Flex>
                        </Flex>

                        <Flex flexDir="row" justify="space-between" mt="10px">
                            <Text fontSize="18px" fontWeight={500}>Amount Covered</Text>
                            <Flex justify="center" alignItems="center">
                                <Text color="#645C5E" fontSize="16px" fontWeight={600}>
                                    {productAmount} USDC
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter justifyContent="center" align="center">
                    <Button
                    bg="linear-gradient(0deg, rgba(208, 188, 255, 0.14), rgba(208, 188, 255, 0.14)), #1C1B1F"
                    borderRadius="20px"
                    color="white"
                    fontSize="14px"
                    fontWeight={400}
                    p="10px 100px"
                    _hover={{
                        color: "white"
                    }}
                    onClick={onClose}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}