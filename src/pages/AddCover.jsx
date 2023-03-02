import React, {Suspense, lazy} from 'react'
import { useState, useContext } from 'react';
import { Flex, Box, Spinner, Text, Image, Spacer, Button,
    Input,
    InputRightAddon,
    InputGroup,
    useDisclosure,
} from '@chakra-ui/react';
import Footer2 from '../components/Footer2';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import arrowLeft from '../assets/arrow-left.svg';
import walletIcon from '../assets/empty-wallet.svg';
import { StopScreenMessageContext } from '../constants/stopScreenMessage';
import TransactionLoaderModal from '../components/TransactionLoaderModal';
import StopErrorMessage from '../components/StopErrorMessage';

const NavBar = lazy(() => import("../components/Navbar"));

const AddCover = ({...rest}) => {

     const {root} = useStyles();

    //  const [coverForm, setCoverForm] = useState({
    //   coveredAddress: '',
    //   amountCovered: '',
    //   description: ''
    //  })

    //  const handleChange = (e) => {
    //   setCoverForm({...coverForm, [e.target.name]: e.target.value});
    //  }

      // @note - initialValues: is an object that describes the initial values of the respective form fields. 
      const initialValues = {
        coveredAddress: '',
        amountCovered: '',
        description: ''
      };


      // @note - validate: this accepts a function that handles the form validation. The function accepts an object in the form of data values as an argument and validates each property in the object based on the rules defined.
      const validate = (values) => {
        let errors = {};
        if (!values.coveredAddress) {
            errors.coveredAddress = "Covered wallet address is required"
        }
        if (!values.amountCovered) {
            errors.amountCovered = "Amount covered is required"
        }
        if (!values.description) {
            errors.description = "Description is required"
        }
        return errors;
      };

       /* @note - onSubmit: This handles what happens after the user submits. 
        * The onSubmit prop takes a callback function that will only run when 
        * there are no errors, meaning the user inputs are valid.
        */
       const submitForm = (values) => {
        console.log(values);
      };
    
     const {
        isOpen: transactionLoadingIsOpen,
        onOpen: transactionLoadingOnOpen,
        onClose: transactionLoadingOnClose
      } = useDisclosure();
  
    //  console.log(coverForm, "cover form")

    // @note - this will stop user viewing mobile display and it will be removed later in the latest version
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
              <Text fontSize="18px" fontWeight="600">Create insurance cover for InstadApp protocol</Text> 
            </Flex>  
            </Flex>
            <Text fontSize="14px" fontWeight={500} mt="8px">
              Please fill in the following information to create cover for the protocol
            </Text>   

           <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty
        } = formik;
        return (
              <Flex mt="20px" flexDir="column" p="50px">
                    {/* ------------------------------- Input 1 ------------------------------- */}
                    <Flex flexDir="column" onSubmit={handleSubmit}>
                      <Text fontSize="15px" fontWeight="500">Covered address</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter the covered wallet address"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none", borderBottomColor: "black" }}
                            type='text'
                            value={values.coveredAddress}
                            name="coveredAddress"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {errors.coveredAddress && touched.coveredAddress && (
                        <Text color="red" fontSize="14" fontWeight="500" mt="5px">{errors.coveredAddress}</Text>
                        )}      
                </Flex>

                  {/* ------------------------------- Input 2 ------------------------------- */}
                  <Flex flexDir="column" mt="30px">
                      <Text fontSize="15px" fontWeight="500">Amount Covered</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none", borderBottomColor: "black" }}
                          as="button"
                          w={"100%"}
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
                            value={values.amountCovered}
                            name='amountCovered'
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <InputRightAddon borderRadius={0} border="0" bg="footerBgColor">
                           <Text fontSize="12px" fontWeight={500}>USDC</Text>
                           <Image src={walletIcon} ml="4px" boxSize="20px" />
                          </InputRightAddon>
                        </InputGroup>
                        {errors.amountCovered && touched.amountCovered && (
                        <Text color="red" fontSize="14" fontWeight="500" mt="5px">{errors.amountCovered}</Text>
                        )}   
                </Flex>

                {/* ------------------------------- Input 3 ------------------------------- */}
                <Flex flexDir="column" mt="30px">
                      <Text fontSize="15px" fontWeight="500">Description</Text>
                        <Spacer />
                        <InputGroup
                          _focus={{ boxShadow: "none" }}
                          as="button"
                          w={"100%"}
                        >
                          <Input
                            placeholder="Enter the description of the protocol cover"
                            borderRadius="0"
                            border="0"
                            borderBottom="1px solid #49454F"
                            _placeholder={{
                              color: "#1C1B1F",
                              justifySelf: "flex-end",
                              fontSize: "12px"
                            }}
                            _focus={{ boxShadow: "none", borderBottomColor: "black" }}
                            text='text'
                            value={values.description}
                            name='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </InputGroup>
                        {errors.description && touched.description && (
                        <Text color="red" fontSize="14" fontWeight="500" mt="5px">{errors.description}</Text>
                        )}  
                </Flex>
                
              </Flex> 
        );
      }}
    </Formik>
              
          <Flex justifyContent={"center"} align="center">
            <Button bg="#3E7FDF"
              borderRadius="20px"
              p="10px 140px"
              color="white"
              fontSize="14px"
              fontWeight="400"
              onClick={transactionLoadingOnOpen}
              >
              Confirm insurance
            </Button>
          </Flex>
      </Flex>

      
        <>
          <TransactionLoaderModal transactionLoadingIsOpen={transactionLoadingIsOpen}
           transactionLoadingOnClose={transactionLoadingOnClose}
           transactionLoadingOnOpen={transactionLoadingOnOpen}
          />
          </>

      {/* Footer here */}
      <Footer2 />
   </Box>
    : 
      <StopErrorMessage />
     }
   </>
  )
}

export default AddCover

const useStyles = () => {
    return {
      root: {
        backgroundColor: "#FBFDFF",
      },

    }
}

