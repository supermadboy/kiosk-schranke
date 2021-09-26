import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';

const MenuButtonPropTypes = {
  isActive: PropTypes.bool.isRequired,
};

const MenuButton: FunctionComponent< InferProps<typeof MenuButtonPropTypes>> = ({ isActive }) => (
  <button className={`hamburger hamburger--slider ${isActive ? 'is-active' : ''}`} type="button">
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
);

MenuButton.propTypes = MenuButtonPropTypes;

export default MenuButton;
