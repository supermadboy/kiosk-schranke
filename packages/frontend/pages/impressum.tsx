import type { InferGetStaticPropsType } from 'next';
import {
  Box, Flex, Text,
} from 'rebass/styled-components';
import { fetchImpressum } from '../lib/api';
import Page from '../components/page';

export const getStaticProps = async () => {
  const impressum = await fetchImpressum();

  return {
    props: {
      impressum,
    },
  };
};

const Impressum = ({ impressum }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Page seo={impressum.seo}>
    <Flex
      minHeight="calc(100vh - 55px)"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        mb={7}
      >
        <Text
          variant="big"
          as="h1"
        >
          WO?
        </Text>
      </Box>

      <Box
        mb={7}
      >
        <Box
          pb={4}
        >
          <Text
            as="p"
          >
            <b>Kulturkiosk schranke</b>
          </Text>
        </Box>

        <Box
          pb={4}
        >
          <Text
            as="p"
          >
            <b>Inhaber:</b>
            {' '}
            Moritz Schneinder
          </Text>
          <Text
            as="p"
          >
            Moltkestr. 17
          </Text>
          <Text
            as="p"
          >
            78467 Konstanz (Petershausen)
          </Text>
        </Box>

        <Box
          pb={1}
        >
          <Text
            as="p"
          >
            <b>Konzept&amp;Gestalgung:</b>
            {' '}
            Selina Vix
          </Text>
        </Box>

        <Text
          as="p"
        >
          <b>Programmierung:</b>
          {' '}
          Markus Szarvas
        </Text>
      </Box>
    </Flex>
  </Page>
);

export default Impressum;
