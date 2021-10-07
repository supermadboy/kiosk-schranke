import type { InferGetServerSidePropsType } from 'next';
import {
  Box, Flex,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import CanvasDraw from 'react-canvas-draw';
import { fetchHomepage } from '../lib/api';
import Page from '../components/page';

export const getServerSideProps = async () => {
  const homepage = await fetchHomepage();

  return {
    props: {
      homepage,
    },
  };
};

const Home = ({ homepage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // eslint-disable-next-line
  let canvas: any;

  return (
    <Page seo={homepage.seo}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems={['normal', 'center']}
        mt={[0, '-130px']}
      >
        <Box
          pr={[8, 0]}
          mb={[7, '-70px']}
        >
          <Box
            width="1000px"
            height="666px"
            sx={{
              display: ['none', 'block'],
              position: 'relative',
              canvas: {
                position: 'absolute',
                left: '-100px',
                top: '0',
              },
              '.canvas': {
                position: 'absolute',
                left: '0',
                top: '0',
                backgroundColor: 'transparent!important',
              },
            }}
          >
            <Image src="/schraenkle.svg" width={1000} height={666} />
            <CanvasDraw
              ref={(canvasDraw: any) => {
                canvas = canvasDraw;
              }}
              className="canvas"
              hideGrid
              canvasWidth={1200}
              canvasHeight={766}
              brushRadius={2}
              brushColor="#000"
              lazyRadius={0}
            />
          </Box>
          <Box
            sx={{
              display: ['block', 'none'],
            }}
          >
            <Image src="/platzhalter_kiosk.svg" width={250} height={180} layout="responsive" objectFit="contain" objectPosition="left" />
          </Box>

        </Box>

        <Box
          pr={[13, 0]}
          mb={['-40px', '-60px']}
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
};

export default Home;
