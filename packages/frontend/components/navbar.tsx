import { NextComponentType } from 'next';
import { useState } from 'react';
import {
  Box, Flex, Link,
} from 'rebass/styled-components';
import MenuButton from './menu-button';

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
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/impressum">Impressum</Link>
      </Flex>
      <Box
        p={3}
        flexGrow={1}
        sx={{
          zIndex: 1,
        }}
        bg="primaryBg"
      >
        <Link href="/">Kiosk Schranke</Link>
      </Box>
      <Box
        p={3}
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
