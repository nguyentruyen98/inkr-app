import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '../pages/home';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>INKR App</title>
      </Head>
      <HomePage />
    </div>
  );
};

export default Home;
