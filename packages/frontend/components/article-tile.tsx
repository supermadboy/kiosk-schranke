import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Text } from 'rebass/styled-components';
import Image from 'next/image';
import { getStrapiURL } from '../lib/api';

const ArticleTilePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

const ArticleTile: FunctionComponent<InferProps<typeof ArticleTilePropTypes>> = (
  {
    title, description, imageUrl, publishDate, slug,
  },
) => (
  <a
    href={`/diary-entry/${slug}`}
  >
    <Card
      sx={{
        cursor: 'pointer',
      }}
    >
      <Text
        as="p"
        variant="normal"
      >
        { (new Date(publishDate)).toLocaleDateString('de-DE') }
      </Text>

      <Image src={imageUrl ? getStrapiURL(imageUrl) : '/platzhalter.svg'} width={192} height={100} layout="responsive" />

      <Text
        mt={2}
        as="p"
        variant="normal"
        fontWeight="bold"
      >
        {title}
      </Text>

      <Text
        as="p"
        variant="normal"
      >
        {description}
      </Text>

      <Text
        as="p"
        variant="normal"
        fontWeight="bold"
      >
        ...mehr
      </Text>
    </Card>
  </a>
);

ArticleTile.propTypes = ArticleTilePropTypes;

ArticleTile.defaultProps = {
  imageUrl: undefined,
};
export default ArticleTile;
