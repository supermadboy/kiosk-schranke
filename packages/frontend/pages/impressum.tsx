import type { InferGetStaticPropsType } from 'next';
import {
  Box, Flex,
} from 'rebass/styled-components';
import { fetchImpressum } from '../lib/api';
import Page from '../components/page';
import Text from '../components/basic/text';

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
          <Text>
            <b>Kulturkiosk schranke</b>
          </Text>
        </Box>

        <Box
          pb={4}
        >
          <Text>
            <b>Inhaber:</b>
            {' '}
            Moritz Schneinder
          </Text>
          <Text>
            Moltkestr. 17
          </Text>
          <Text>
            78467 Konstanz (Petershausen)
          </Text>
        </Box>

        <Box
          pb={1}
        >
          <Text>
            <b>Konzept&amp;Gestalgung:</b>
            {' '}
            Selina Vix
          </Text>
        </Box>

        <Text>
          <b>Programmierung:</b>
          {' '}
          Markus Szarvas
        </Text>
      </Box>
    </Flex>
  </Page>
);

export default Impressum;
