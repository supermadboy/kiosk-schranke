import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Card, Text, Box } from 'rebass/styled-components';
import Image from 'next/image';

const ArticleTilePropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishDate: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

const ArticleTile: FunctionComponent<InferProps<typeof ArticleTilePropTypes>> = (
  {
    title, description, imageUrl, publishDate, slug,
  },
) => (
  <a
    href={`/article/${slug}`}
  >
    <Card
      p={2}
      sx={{
        borderWidth: '1px',
        borderRadius: '5px',
        borderColor: 'dark',
        borderStyle: 'solid',
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

export default ArticleTile;
