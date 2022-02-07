import type { InferGetServerSidePropsType } from 'next';
import {
  Box, Flex, Link,
} from 'rebass/styled-components';
import ReactMarkdown from 'react-markdown';
import Slider from 'react-slick';
import Image from 'next/image';
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

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const About = ({ about }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <Page seo={about.seo}>

    <Flex
      flexDirection={['column']}
      pt={[7, 7]}
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
        display="grid"
        sx={{
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          'grid-gap': '24px',
        }}
      >
        <Flex
          flexDirection="column"
          alignItems="center"
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
          sx={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: '#b2bfbd',
            borderRadius: '15px',
          }}
          p={3}
        >
          <ReactMarkdown>
            { about.extraInformation }
          </ReactMarkdown>
        </Flex>
      </Box>
    </Flex>

  </Page>
);

export default About;
