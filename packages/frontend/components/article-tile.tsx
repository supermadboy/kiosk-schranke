import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Text } from 'rebass/styled-components';
import Image from 'next/image';

const ArticleTilePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const ArticleTile: FunctionComponent<InferProps<typeof ArticleTilePropTypes>> = (
  { title, description, imageUrl },
) => (
  <Card
    p={2}
    sx={{
      borderWidth: '1px',
      borderRadius: '5px',
      borderColor: 'dark',
      borderStyle: 'solid',
    }}
  >
    <Image src={imageUrl} width={200} height={200} layout="responsive" />
    <Text
      py={2}
      as="p"
      variant="normal"
    >
      {title}
    </Text>
    <Text
      as="p"
      variant="small"
    >
      {description}
    </Text>
  </Card>
);

ArticleTile.propTypes = ArticleTilePropTypes;

export default ArticleTile;
