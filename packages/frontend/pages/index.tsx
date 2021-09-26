import type { InferGetStaticPropsType } from 'next';
import {
  Text, Heading,
} from 'rebass/styled-components';
import ArticlePreview from '../components/articles-preview';
import Page from '../components/page';
import { fetchArticles, fetchHomepage } from '../lib/api';

export const getStaticProps = async () => {
  const [homepage, articles] = await Promise.all([
    fetchHomepage(),
    fetchArticles(4),
  ]);

  return {
    props: {
      homepage,
      articles,
    },
  };
};

const Home = ({ homepage, articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={homepage.seo}>
    <Heading
      fontSize={5}
      pb={2}
      as="h1"
    >
      Kiosk Schranke
    </Heading>

    <Text
      pb={2}
    >
      { homepage.description }
    </Text>

    <ArticlePreview articles={articles} />
  </Page>
);

export default Home;
