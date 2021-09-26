import type { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Button } from 'rebass/styled-components';
import { fetchHomepage } from '../lib/api';

export const getStaticProps = async () => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const homepage = await fetchHomepage();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      homepage,
    },
  };
};

const Home = ({ homepage }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(homepage);

  return (
    <div>
      <Head>
        <title>Kiosk Schranke</title>
        <meta name="description" content="Der einzige wahre Kultur Kiosk Schranke in Konstanz" />
      </Head>

      { homepage.seo.metaTitle }
      <h1>
        Kiosk Schranke
      </h1>

      <p>
        jetzt geht&apos;s los
      </p>
      <Button variant="primary">test</Button>
    </div>
  );
};

export default Home;
