import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import {
  Box, Text, Heading,
} from 'rebass/styled-components';
import ArticlePreview from '../components/articles-preview';
import { fetchArticles, fetchHomepage } from '../lib/api';

export const getStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const homepage = await fetchHomepage();

  const articles = await fetchArticles(4);

  console.log(articles);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      homepage,
      articles,
    },
  };
};

const Home = ({ homepage, articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Box>
    <Head>
      <title>{ homepage.seo.metaTitle }</title>
      <meta name="description" content={homepage.seo.metaDescription} />
      <meta name="image" content={`http://localhost:1337${homepage.seo.shareImage.url}`} />
    </Head>

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
  </Box>
);

export default Home;
