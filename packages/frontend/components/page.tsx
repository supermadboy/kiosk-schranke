import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Box } from 'rebass/styled-components';
import Head from 'next/head';
import { getStrapiURL } from '../lib/api';

const PagePropTypes = {
  seo: PropTypes.shape({
    metaTitle: PropTypes.string.isRequired,
    metaDescription: PropTypes.string.isRequired,
    shareImage: PropTypes.shape({ url: PropTypes.string.isRequired }),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

const Page: FunctionComponent<InferProps<typeof PagePropTypes>> = (
  { seo, children },
) => (
  <Box>
    <Head>
      <title>
        Kiosk Schranke |
        {' '}
        { seo.metaTitle }
      </title>
      <meta name="description" content={seo.metaDescription} />
      {
        seo.shareImage && (<meta name="image" content={getStrapiURL(seo.shareImage.url)} />)
      }
    </Head>

    <Box
      maxWidth="1000px"
      margin="auto"
    >
      {children}
    </Box>
  </Box>
);

Page.propTypes = PagePropTypes;

export default Page;
