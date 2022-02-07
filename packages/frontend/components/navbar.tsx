import { NextComponentType } from 'next';
import { useEffect, useRef, useState } from 'react';
import {
  Box, Flex,
} from 'rebass/styled-components';
import Image from 'next/image';
import NavLink from './basic/navlink';

const Navbar: NextComponentType = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLElement>();

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
      height="100px"
      backgroundColor="secondaryBg"
      sx={{
        position: 'relative',
        zIndex: '20',
      }}
      ref={ref}
      justifyContent="space-between"
    >
      <Box
        p={3}
        display="flex"
        justifyContent="center"
        alignItems="space-between"
        height="100%"
        sx={{
          zIndex: 1,
          position: 'relative',
          alignSelf: 'baseline',
        }}
      >
        <NavLink href="/">

          <Box
            sx={{
              display: ['none', 'block'],
            }}
          >
            <Image src="/logo_new.gif" width="220px" height="80px" objectFit="contain" />
          </Box>
          <Box
            sx={{
              display: ['block', 'none'],
            }}
          >
            <Image src="/logo_new.gif" width="100px" height="40px" objectFit="contain" />
          </Box>
        </NavLink>
      </Box>
      <Flex
        padding={[0, 3]}
        marginRight={[0, 5]}
        sx={{
          position: 'sticky',
          top: ['150px', '0'],
          zIndex: [1, 2],
          a: {
            marginRight: [3, 7],
            fontSize: [1, 2],
            ':hover': {
              textDecoration: 'underline',
            },
          },
        }}
        alignItems="center"
        justifyContent="center"
      >
        <NavLink href="/">KIOSK</NavLink>
        <NavLink href="/diary">TAGEBUCH</NavLink>
        <NavLink href="/about">KLUB</NavLink>
      </Flex>
    </Flex>
  );
};

export default Navbar;
