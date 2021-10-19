import type { InferGetServerSidePropsType } from 'next';
import {
  Box, Flex, Button,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import CanvasDraw from 'react-canvas-draw';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import { fetchHomepage } from '../lib/api';
import Page from '../components/page';
import NewsletterRegistration from '../components/newsletter';

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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (homepage.popupEnabled && !document.cookie.includes('referral_key=popup')) {
      setOpen(true);
    }
  }, [homepage.popupEnabled]);

  const closePopup = () => {
    document.cookie = 'referral_key=popup;max-age=7200;';
    setOpen(false);
  };

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
            <Box
              sx={{
                position: 'absolute',
                right: '-40px',
                bottom: '10px',
              }}
            >
              <Image src="/draw_icon.svg" width={80} height={80} />

            </Box>
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
          <Box
            my={[8, 10]}
          />
          <NewsletterRegistration>
            {homepage.newsLetterText}
          </NewsletterRegistration>
        </Box>
      </Flex>

      <Popup open={open}>
        <Flex
          mx={6}
          p={[2]}
          sx={{
            border: '1px solid black',
            maxWidth: '450px',
          }}
          flexDirection="column"
          backgroundColor="primaryBg"
        >
          <Button
            variant="primary"
            p={2}
            sx={{
              alignSelf: 'flex-end',
              cursor: 'pointer',
              width: '20px',
              height: '20px',
              outline: 'none',
              background: 'linear-gradient(to top left,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),rgba(0,0,0,1) 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%),linear-gradient(to top right,rgba(0,0,0,0) 0%,rgba(0,0,0,0) calc(50% - 0.8px),rgba(0,0,0,1) 50%,rgba(0,0,0,0) calc(50% + 0.8px),rgba(0,0,0,0) 100%)',
            }}
            onClick={() => closePopup()}
          />

          <Box
            m={[2]}
          >
            <ReactMarkdown>
              { homepage.popupText }
            </ReactMarkdown>
          </Box>
        </Flex>
      </Popup>
    </Page>
  );
};

export default Home;
