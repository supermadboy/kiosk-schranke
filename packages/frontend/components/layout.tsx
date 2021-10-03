import PropTypes from 'prop-types';
import { NextComponentType } from 'next';
import { Box } from 'rebass/styled-components';
import Head from 'next/head';
import Navbar from './navbar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

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
      pb={4}
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
