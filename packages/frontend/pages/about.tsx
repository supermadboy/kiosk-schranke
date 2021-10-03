import type { InferGetStaticPropsType } from 'next';
import {
  Box, Text,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchAbout } from '../lib/api';
import Page from '../components/page';

export const getStaticProps = async () => {
  const about = await fetchAbout();

  return {
    props: {
      about,
    },
  };
};

const About = ({ about }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={about.seo}>

    <Box
      mb={7}
    >
      <Text
        variant="big"
        as="h1"
      >
        WER?
      </Text>
    </Box>

    <Box
      pr={8}
      mb={7}
    >
      <Image src="/platzhalter_idee.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />
    </Box>

    <Box
      mb={7}
    >
      <ReactMarkdown>
        {about.content}
      </ReactMarkdown>
    </Box>

    <Image src="/platzhalter_foto.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />

  </Page>
);

export default About;
