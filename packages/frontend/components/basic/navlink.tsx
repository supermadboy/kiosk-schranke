import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';

import { Link } from 'rebass/styled-components';

const NavLinkPropTypes = {
  href: PropTypes.string.isRequired,
  isBigLink: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

const NavLink: FunctionComponent<InferProps<typeof NavLinkPropTypes>> = (
  { href, isBigLink, children },
) => (
  <Link
    href={href}
    sx={{
      display: 'inline-block',
      textDecoration: `${!isBigLink ? 'none' : 'underline'}`,
      color: 'text',
    }}
    variant={isBigLink ? 'bigLink' : ''}
  >
    {children}
  </Link>
);

NavLink.propTypes = NavLinkPropTypes;

NavLink.defaultProps = {
  isBigLink: false,
};

export default NavLink;
