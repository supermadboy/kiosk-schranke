import type { InferGetServerSidePropsType } from 'next';
import {
  Box,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { fetchAbout } from '../lib/api';
import Page from '../components/page';

export const getServerSideProps = async () => {
  const about = await fetchAbout();

  return {
    props: {
      about,
    },
  };
};

const About = ({ about }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Page seo={about.seo}>

    <Box
      m={[0, 'auto']}
      mb={[7, 7]}
      maxWidth="700px"
      sx={{
        textAlign: ['left', 'center'],
      }}
    >
      <ReactMarkdown>
        {about.content}
      </ReactMarkdown>
    </Box>

    <Box
      pr={8}
      mb={7}
      maxWidth="700px"
      sx={{
        display: ['block', 'none'],
      }}
    >
      <Image src="/platzhalter_foto.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />
    </Box>

    <Image src="/platzhalter_idee.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />

  </Page>
);

export default About;
