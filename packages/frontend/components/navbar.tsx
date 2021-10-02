import { NextComponentType } from 'next';
import { useState } from 'react';
import {
  Box, Flex,
} from 'rebass/styled-components';
import MenuButton from './menu-button';
import NavLink from './basic/navlink';

const Navbar: NextComponentType = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <Flex
      as="header"
      height="55px"
      sx={{
        position: 'relative',
      }}
    >
      <Flex
        width="100%"
        padding={[0, 3]}
        marginRight={[0, 5]}
        sx={{
          position: 'absolute',
          top: ['55px', '0'],
          transform: `translatey(${isActive ? '0' : '-100%'})`,
          transition: '1s transform',
          zIndex: [0, 2],
        }}
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
        bg={['primaryBg', 'transparent']}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/diary">Tagebuch</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/impressum">Impressum</NavLink>
      </Flex>
      <Box
        p={3}
        flexGrow={1}
        display="flex"
        alignItems="center"
        sx={{
          zIndex: 1,
        }}
        bg="primaryBg"
      >
        <NavLink href="/">Kiosk Schranke</NavLink>
      </Box>
      <Box
        p={3}
        display="flex"
        alignItems="center"
        sx={{
          zIndex: 3,
        }}
        onClick={toggleMenu}
        bg="primaryBg"
      >
        <MenuButton isActive={isActive} />
      </Box>
    </Flex>
  );
};

export default Navbar;
