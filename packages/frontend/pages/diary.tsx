import type { InferGetStaticPropsType } from 'next';
import ReactMarkdown from 'react-markdown';
import {
  Box,
} from 'rebass/styled-components';
import { fetchDiary } from '../lib/api';
import Page from '../components/page';
import Text from '../components/basic/text';

export const getStaticProps = async () => {
  const diary = await fetchDiary();

  return {
    props: {
      diary,
    },
  };
};

const Diary = ({ diary }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={diary.seo}>

    <Box
      mb={7}
    >
      <Text
        variant="big"
      >
        WAS?
      </Text>
    </Box>

    <ReactMarkdown>
      {diary.content}
    </ReactMarkdown>

  </Page>
);

export default Diary;
