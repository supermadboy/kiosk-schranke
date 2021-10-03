import type { InferGetStaticPropsType } from 'next';
import {
  Box, Flex,
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
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems={['normal', 'center']}
      mt={[0, '-100px']}
    >
      <Box
        pr={[8, 0]}
        mb={[7, '-40px']}
        maxWidth="1200px"
      >
        <Box
          sx={{
            display: ['none', 'block'],
          }}
        >
          <Image src="/schraenkle.svg" width={1000} height={666} />
        </Box>
        <Box
          sx={{
            display: ['block', 'none'],
          }}
        >
          <Image src="/platzhalter_idee.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />
        </Box>

      </Box>

      <Box
        pr={[13, 0]}
        mb={['-40px']}
      >
        <Box
          sx={{
            display: ['none', 'block'],
          }}
        >
          <Image src="/hallo.svg" width={200} height={150} />
        </Box>
        <Box
          sx={{
            display: ['block', 'none'],
          }}
        >
          <Image src="/hallo.svg" width={80} height={60} layout="responsive" objectFit="contain" objectPosition="left" />
        </Box>
      </Box>

      <Box
        maxWidth="800px"
        sx={{
          textAlign: ['start', 'center'],
        }}
      >
        <ReactMarkdown>
          {homepage.content}
        </ReactMarkdown>
      </Box>
    </Flex>

  </Page>
);

export default Home;
