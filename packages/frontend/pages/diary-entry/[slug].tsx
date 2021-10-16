import type { InferGetServerSidePropsType } from 'next';
import {
  Text, Box,
} from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Page from '../../components/page';
import { fetchArticle, getStrapiURL } from '../../lib/api';

export const getServerSideProps = async (context: any) => {
  const article = await fetchArticle(context.params.slug);

  return {
    props: {
      article,
    },
  };
};

const Article = ({ article }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Page seo={article.seo}>

    <Box
      mb={7}
    >
      <Text
        as="p"
        variant="normal"
      >
        { (new Date(article.published_at)).toLocaleDateString('de-DE')}
      </Text>
      <Text
        as="p"
        fontWeight="bold"
      >
        {article.title}
      </Text>
    </Box>

    <Box
      mb={7}
    >
      <Image src={article.image?.url ? getStrapiURL(article.image.url) : '/platzhalter.svg'} width={70} height={52} layout="responsive" objectFit="contain" />
    </Box>

    <ReactMarkdown>
      {article.content}
    </ReactMarkdown>

  </Page>
);

export default Article;
