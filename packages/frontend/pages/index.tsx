import type { InferGetStaticPropsType } from 'next';
import {
  Box, Text,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchHomepage } from '../lib/api';
import Page from '../components/page';

export const getStaticProps = async () => {
  const homepage = await fetchHomepage();

  return {
    props: {
      homepage,
    },
  };
};

const Home = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={homepage.seo}>

    <Box
      pr={8}
      mb={7}
    >
      <Image src="/platzhalter.svg" width={192} height={100} layout="responsive" />
    </Box>

    <Box
      mb={7}
    >
      <Text
        variant="big"
        as="h1"
      >
        HELLO!
      </Text>
    </Box>

    <ReactMarkdown>
      {homepage.content}
    </ReactMarkdown>

  </Page>
);

export default Home;
