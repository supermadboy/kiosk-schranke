import { NextComponentType } from 'next';
import { useEffect, useRef, useState } from 'react';
import {
  Box, Flex,
} from 'rebass/styled-components';
import Image from 'next/image';
import MenuButton from './menu-button';
import NavLink from './basic/navlink';

const Navbar: NextComponentType = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (isActive) {
        setIsActive(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <Flex
      as="header"
      height="150px"
      sx={{
        position: 'relative',
        zIndex: [1, 0],
      }}
      ref={ref}
    >
      <Flex
        width="100%"
        padding={[0, 3]}
        marginRight={[0, 5]}
        sx={{
          position: 'absolute',
          top: ['150px', '0'],
          transform: `translatey(${isActive ? '0' : '-100%'})`,
          transition: '1s transform',
          zIndex: [1, 2],
          borderBottom: '1px solid black',
          borderWidth: ['1px', '0'],
          a: {
            marginBottom: [2, 0],
            marginRight: [0, 2],
          },
        }}
        flexDirection={['column', 'row']}
        alignItems="center"
        justifyContent="center"
        bg={['primaryBg', 'transparent']}
      >
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">Über uns</NavLink>
        <NavLink href="/diary">Tagebuch</NavLink>
        <NavLink href="/impressum">Impressum</NavLink>
      </Flex>
      <Box
        p={3}
        flexGrow={1}
        display="flex"
        alignItems="center"
        sx={{
          zIndex: 1,
          position: 'relative',
        }}
        bg="primaryBg"
      >
        <a href="/">
          <Image src="/logo.gif" width="160px" height="120px" objectFit="contain" />
        </a>
      </Box>
      <Box
        p={3}
        display="flex"
        alignItems="flex-start"
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
