import type { InferGetStaticPropsType } from 'next';
import {
  Box,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchAbout } from '../lib/api';
import Page from '../components/page';
import Text from '../components/basic/text';

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

    <Text
      variant="big"
    >
      WER?
    </Text>

    <Box
      pr={13}
      mb={7}
    >
      <Image src="/platzhalter.svg" width={192} height={100} layout="responsive" />
    </Box>

    <ReactMarkdown>
      {about.content}
    </ReactMarkdown>

  </Page>
);

export default About;
