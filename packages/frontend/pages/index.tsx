import type { InferGetStaticPropsType } from 'next';
import {
  Text, Box, Flex,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchHomepage } from '../lib/api';
import Page from '../components/page';

export const getStaticProps = async () => {
  const [homepage] = await Promise.all([
    fetchHomepage(),
  ]);

  return {
    props: {
      homepage,
    },
  };
};

const Home = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={homepage.seo}>

    <Box
      pr={13}
      mb={7}
    >
      <Image src="/platzhalter.svg" width={192} height={100} layout="responsive" />
    </Box>

    <ReactMarkdown>
      {homepage.description}
    </ReactMarkdown>

  </Page>
);

export default Home;
