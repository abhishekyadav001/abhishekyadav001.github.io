import { Heading, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { skillsdata } from "./skilldata.js";

const Skills = () => {
  let skills = skillsdata.map((item) => {
    return (
      <VStack
        itemID="skills"
        key={item.name}
        shadow={"md"}
        py="4"
        px="2"
        width="100px"
        height={"100px"}
        justifyContent="flex-end"
        boxShadow="0px 5px 10px 0px rgba(0, 0, 0, 0.5)"
        rounded={"lg"}
        _hover={{
          transform: "translateY(-2px)",
          boxShadow: "0px 10px 20px 2px rgba(0, 0, 0, 0.25)",
        }}
        bg="white"
        color="black"
        id="skills"
      >
        <Image src={item.icon} size={"l"} height="50%" />
        <Heading size={"xs"}>{item.name}</Heading>
      </VStack>
    );
  });

  return (
    <VStack
      p="8"
      height={{ base: "100%", md: "90vh" }}
      alignItems={"center"}
      bgGradient="radial-gradient(circle at 27.1% 51.8%, #0c3542 0.5%, #28324c 94.4%);"
      color="white"
    >
      <Heading my={6}>My Tools & Skills </Heading>
      <HStack flexWrap={"wrap"} gap="3" maxW={"800px"} justifyContent="center">
        {skills}
      </HStack>
    </VStack>
  );
};

export default Skills;
