import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';

import { Text as RebassText } from 'rebass/styled-components';

const TextPropTypes = {
  variant: PropTypes.oneOf(['smallText', 'normalText']),
  children: PropTypes.node.isRequired,
};

const Text: FunctionComponent<InferProps<typeof TextPropTypes>> = (
  { variant, children },
) => (
  <RebassText
    variant={variant}
  >
    {children}
  </RebassText>
);

Text.propTypes = TextPropTypes;

Text.defaultProps = {
  variant: 'normalText',
};

export default Text;
