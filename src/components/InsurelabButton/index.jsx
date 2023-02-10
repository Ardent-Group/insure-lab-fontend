import { FC, memo } from "react";
import { Button, Heading, Text } from "@chakra-ui/react";

const InsurelabButton = ({
  icon,
  name,
  isLoading,
  onCLick,
  isDisabled,
  rest,
}) => {

  const { root } = useStyles();

  return (
    <>
      <Button
        isDisabled={isDisabled}
        as={"button"}
        isLoading={isLoading}
        onClick={onCLick}
        {...root}
        {...rest}
        loadingText="loading"
      >
        {icon}
        <Heading fontSize={"70%"}>{name}</Heading>
      </Button>
    </>
  );
};

export default memo(InsurelabButton);

const useStyles = () => {
  return {
    root: {
      colorScheme: "black",
      bg: "black",
      py: {
        base: 5,
      },
      width: "100%",
      h: "40px",
      borderRadius: "100px",
      fontWeight: "400",
      loadingText: "Submitting",
      fontSize: ["20px"],
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.2px",
      borderColor: "dark",
    },
  };
};