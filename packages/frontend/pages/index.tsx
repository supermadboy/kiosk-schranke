import type { InferGetServerSidePropsType } from 'next';
import {
  Box, Flex, Button, Link,
} from 'rebass/styled-components';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import Popup from 'reactjs-popup';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
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
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
      >
        <Box
          mb={7}
          maxWidth="100%"
        >
          <Box
            my={8}
            className="customSlider"
          >
            <Slider {...sliderSettings}>
              <div>
                <Image src="/slide1.jpeg" width={1400} height={771} />
              </div>
              <div>
                <Image src="/slide2.jpeg" width={1400} height={771} />
              </div>
              <div>
                <Image src="/slide3.jpeg" width={1400} height={771} />
              </div>
              <div>
                <Image src="/slide4.jpeg" width={1400} height={771} />
              </div>
              <div>
                <Image src="/slide5.jpeg" width={1400} height={771} />
              </div>
              <div>
                <Image src="/slide6.jpeg" width={1400} height={771} />
              </div>
            </Slider>
          </Box>

          <Box
            mb={7}
          >
            <NewsletterRegistration>
              {homepage.newsLetterText}
            </NewsletterRegistration>
          </Box>

          <Box
            display="grid"
            sx={{
              gridTemplateColumns: ['1fr', '1fr 1fr'],
              'grid-gap': '24px',
            }}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#b2bfbd',
                borderRadius: '15px',
                p: {
                  textAlign: 'center',
                },
              }}
              p={3}
            >
              <ReactMarkdown>
                { homepage.openingHours }
              </ReactMarkdown>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#b2bfbd',
                borderRadius: '15px',
                backgroundColor: '#b2bfbd',
              }}
              p={3}
            >
              <Box
                mb={1}
              >
                <Image src="/konzept.svg" width={150} height={100} />

              </Box>
              <Link
                px={2}
                minWidth="120px"
                textAlign="center"
                sx={{
                  backgroundColor: 'primaryBg',
                  borderRadius: '10px',
                }}
                href="/Infoflyer_JPG.jpg"
              >
                mehr
              </Link>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#b2bfbd',
                borderRadius: '15px',
                backgroundColor: '#b2bfbd',
              }}
              p={3}
            >
              <Box
                mb={1}
              >
                <Image src="/kreativ.svg" width={150} height={100} />

              </Box>
              <Link
                px={2}
                minWidth="120px"
                textAlign="center"
                sx={{
                  backgroundColor: 'primaryBg',
                  borderRadius: '10px',
                }}
                href="/creativity"
              >
                mehr
              </Link>
            </Flex>
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: '#b2bfbd',
                borderRadius: '15px',
                p: {
                  textAlign: 'center',
                },
              }}
              p={3}
            >
              <ReactMarkdown>
                { homepage.lunchMenu }
              </ReactMarkdown>
            </Flex>
          </Box>
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
