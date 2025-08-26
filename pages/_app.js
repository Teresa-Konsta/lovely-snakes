import { Fragment } from 'react';
import Head from "next/head";
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {return(
    <Fragment>
      <Head>
        <title>Lovely Snakes</title>
        <meta name="description" content="Detailed information about corn snakes and how to take care of them as pets." />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp
