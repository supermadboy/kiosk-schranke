import PropTypes, { InferProps } from 'prop-types';
import { FunctionComponent } from 'react';
import { Box } from 'rebass/styled-components';
import Head from 'next/head';
import { getStrapiURL } from '../lib/api';
import NavLink from './basic/navlink';

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
  <>
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
      flexGrow={1}
      sx={{
        margin: 'auto',
        marginBottom: '40px',
      }}
    >
      {children}
    </Box>
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        height: '40px',
        zIndex: [2],
        a: {
          marginRight: [3],
          fontWeight: 'bold',
          ':hover': {
            textDecoration: 'underline',
          },
        },
      }}
    >
      <NavLink href="/impressum">Impressum</NavLink>
      <NavLink href="https://www.instagram.com/kulturkiosk_schranke/">Instagram</NavLink>
      <NavLink href="mailto:info@kulturkiosk-schranke.de">Kontakt</NavLink>
    </Box>
  </>
);

Page.propTypes = PagePropTypes;

export default Page;
