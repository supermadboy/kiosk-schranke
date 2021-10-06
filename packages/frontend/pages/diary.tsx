import type { InferGetServerSidePropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import {
  Box, Text,
} from 'rebass/styled-components';
import { fetchArticles, fetchDiary } from '../lib/api';
import Page from '../components/page';
import ArticleTile from '../components/article-tile';

export const getServerSideProps = async () => {
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

const Diary = ({ diary, articles }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
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

    <Box
      mb={7}
    >
      <ReactMarkdown>
        {diary.content}
      </ReactMarkdown>
    </Box>

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
          slug={article.slug}
          title={article.title}
          description={article.description}
          imageUrl={article.image?.url}
          publishDate={article.published_at}
        />

      ))
    }
    </Box>

  </Page>
);

export default Diary;
