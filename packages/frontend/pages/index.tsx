import type { NextPage } from 'next'
import Head from 'next/head'
import { Button } from 'rebass/styled-components'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Kiosk Schranke</title>
        <meta name="description" content="Der einzige wahre Kultur Kiosk Schranke in Konstanz" />
      </Head>

      <main >
        <h1>
         Kiosk Schranke
        </h1>

        <p >
          jetzt geht&apos;s los
        </p>
        <Button variant='primary'>test</Button>
      </main>
    </div>
  )
}

export default Home
