import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Text } from 'rebass/styled-components';
import Image from 'next/image';

const ArticleTilePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const ArticleTile: FunctionComponent<InferProps<typeof ArticleTilePropTypes>> = (
  {
    title, description, imageUrl, publishDate, id,
  },
) => (
  <a
    href={`/article/${id}`}
  >
    <Card
      p={2}
      sx={{
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: 'dark',
        borderStyle: 'solid',
        cursor: 'pointer',
      }}
    >
      <Text
        as="p"
        variant="small"
      >
        { (new Date(publishDate)).toISOString().substr(0, 10) }
      </Text>
      <Image src={imageUrl} width={200} height={200} layout="responsive" />
      <Text
        mt={2}
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
      <Text
        as="p"
        variant="small"
      >
        ...mehr
      </Text>
    </Card>
  </a>
);

ArticleTile.propTypes = ArticleTilePropTypes;

export default ArticleTile;
