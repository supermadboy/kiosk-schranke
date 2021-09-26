import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Box } from 'rebass/styled-components';
import ArticleTile from './article-tile';

const ArticlePreviewPropTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
};

const ArticlePreview: FunctionComponent<InferProps<typeof ArticlePreviewPropTypes>> = (
  { articles },
) => (
  <Box
    sx={{
      display: 'grid',
      gridGap: 2,
      gridTemplateColumns: '1fr 1fr',
    }}
  >
    {
      articles.map((article) => (
        <ArticleTile
          key={article.id}
          imageUrl={`http://localhost:1337${article.image.url}`}
          title={article.title}
          description={article.description}
        />
      ))
    }
  </Box>
);

ArticlePreview.propTypes = ArticlePreviewPropTypes;

export default ArticlePreview;
