import type { InferGetStaticPropsType } from 'next';
import {
  Text, Heading, Flex,
} from 'rebass/styled-components';
import ArticlePreview from '../components/articles-preview';
import NavLink from '../components/basic/navlink';
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
      py={3}
      as="h1"
    >
      Kiosk Schranke
    </Heading>

    <Text
      as="p"
      pb={4}
      variant="normalText"
    >
      { homepage.description }
    </Text>

    <ArticlePreview
      articles={articles}
    />

    <Flex
      py={4}
      justifyContent="center"
    >
      <NavLink
        href="/blog"
        isBigLink
      >
        Erfahre mehr
      </NavLink>
    </Flex>
  </Page>
);

export default Home;
