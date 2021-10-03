import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Box } from 'rebass/styled-components';
import Head from 'next/head';

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
        seo.shareImage && (<meta name="image" content={`http://localhost:1337${seo.shareImage.url}`} />)
      }
    </Head>

    {children}
  </Box>
);

Page.propTypes = PagePropTypes;

export default Page;
