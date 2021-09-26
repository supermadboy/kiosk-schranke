import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Heading, Text } from 'rebass/styled-components';
import Image from 'next/image';

const ArticleTilePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

const ArticleTile: FunctionComponent<InferProps<typeof ArticleTilePropTypes>> = (
  { title, description, imageUrl },
) => (
  <Card>
    <Image src={imageUrl} width={200} height={200} layout="responsive" />
    <Heading>{title}</Heading>
    <Text>{description}</Text>
  </Card>
);

ArticleTile.propTypes = ArticleTilePropTypes;

export default ArticleTile;
