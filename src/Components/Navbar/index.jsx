import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiFillCodeSandboxCircle } from "react-icons/ai"

export const Navbar = () => {
  return (
    <>
      <Box 
        pos={'fixed'}
        as="header" 
        w={"100%"} 
        border={"1px solid red"}
        p={2}
        backdropFilter={'blur(8px)'}
        zIndex={100}
      >
        <Container
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }} 
            display={{ base: 'none', md: 'flex' }}
            alignItems={'center'}
            spacing='24px'
          >
            <NavLink>
              <Flex
                alignItems={'center'}
              >
                <AiFillCodeSandboxCircle fontSize={'1.5rem'} />
                <Text
                  as={'h1'}
                  size={'lg'}
                  letterSpacing={'tighter'}
                  fontWeight={'bold'}
                  fontFamily={'Ubuntu'}
                  ml={1}
                >
                  Ju$T1n
                </Text>
              </Flex>
            </NavLink>
            <NavLink>Trabajos</NavLink>
            <NavLink>Sobre mi</NavLink>
            <NavLink>Contacto</NavLink>

          </Stack>
        </Container>
      </Box>
    </>
  );
};
