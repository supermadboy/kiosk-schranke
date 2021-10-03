import type { InferGetServerSidePropsType } from 'next';
import {
  Text, Box,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { alignContent } from 'styled-system';
import Page from '../../components/page';
import { fetchArticle } from '../../lib/api';
import { ArticleContent } from '../../models';

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
        variant="big"
        as="h1"
      >
        WAS?
      </Text>
    </Box>

    <Box
      mb={7}
    >
      <Text
        as="p"
        variant="small"
      >
        { (new Date(article.published_at)).toISOString().substr(0, 10)}
      </Text>
      <Text
        as="p"
        fontWeight="bold"
      >
        {article.title}
      </Text>
    </Box>

    {
      article.content.map((content: ArticleContent) => (
        <div
          key={content.id}
        >

          {
            content.image
            && (
            <Box
              mb={6}
            >
              <Image src={`http://localhost:1337${content.image?.url}`} width={200} height={100} layout="responsive" objectFit="contain" />
            </Box>
            )
          }

          <ReactMarkdown>
            {content.content}
          </ReactMarkdown>

        </div>
      ))
    }

  </Page>
);

export default Article;
