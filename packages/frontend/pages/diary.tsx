import type { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import {
  Box, Text,
} from 'rebass/styled-components';
import { fetchArticles, fetchDiary } from '../lib/api';
import Page from '../components/page';
import ArticleTile from '../components/article-tile';

export const getStaticProps = async () => {
  const [diary, articles] = await Promise.all([
    fetchDiary(),
    fetchArticles(),
  ]);

  return {
    props: {
      diary,
      articles,
    },
  };
};

const Diary = ({ diary, articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={diary.seo}>

    <Box
      mb={7}
    >
      <Text
        variant="big"
        as="h1"
      >
        WAS?
      </Text>
    </Box>

    <ReactMarkdown>
      {diary.content}
    </ReactMarkdown>

    <Box
      sx={{
        display: 'grid',
        gridGap: [3],
        gridTemplateColumns: ['1fr 1fr'],
      }}
    >

      {
      articles.map((article) => (
        <ArticleTile
          key={article.id}
          id={article.id}
          title={article.title}
          description={article.description}
          imageUrl={`http://localhost:1337${article.image.url}`}
          publishDate={article.published_at}
        />

      ))
    }
    </Box>

  </Page>
);

export default Diary;
