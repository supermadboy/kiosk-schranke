import PropTypes from 'prop-types';
import { NextComponentType } from 'next';
import { Box } from 'rebass/styled-components';
import Head from 'next/head';
import Navbar from './navbar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <Head>

      <link
        rel="preload"
        href="/fonts/texGyreHeros.ttf"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/texGyreHeros.woff"
        as="font"
        crossOrigin=""
      />
    </Head>
    <Navbar />
    <Box
      as="main"
      px={4}
    >
      {children}
    </Box>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
