import PropTypes from 'prop-types';
import { NextComponentType } from 'next';
import { Box } from 'rebass/styled-components';
import Navbar from './navbar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <Navbar />
    <Box
      as="main"
      px={2}
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
