import PropTypes from 'prop-types';
import { NextComponentType } from 'next';
import Navbar from './navbar';

const Layout: NextComponentType = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
