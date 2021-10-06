import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Text, Box } from 'rebass/styled-components';
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >
      <Box>
        <Text
          as="p"
          variant="small"
        >
          { (new Date(publishDate)).toLocaleDateString('de-DE') }
        </Text>

        <Image src={imageUrl ? getStrapiURL(imageUrl) : '/platzhalter.svg'} width={200} height={100} layout="responsive" />

        <Text
          mt={2}
          as="p"
          variant="normal"
        >
          {title}
        </Text>
      </Box>

      <Box>
        <Text
          as="p"
          variant="small"
        >
          {description}
        </Text>

        <Text
          as="p"
          variant="small"
          fontWeight="bold"
        >
          ...mehr
        </Text>
      </Box>
    </Card>
  </a>
);

ArticleTile.propTypes = ArticleTilePropTypes;

ArticleTile.defaultProps = {
  imageUrl: undefined,
};
export default ArticleTile;
