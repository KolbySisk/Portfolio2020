import React from 'react';
import Head from 'next/head';
import Data from '../../data';

const WorkPage = ({ work }) => {
  return (
    <>
      <Head>
        <title>Kolby Sisk - Software engineer</title>
      </Head>
      <h1>Work</h1>
    </>
  );
};

WorkPage.getInitialProps = async context => {
  const { slug } = context.query;
  const work = Data.work.find(d => d.slug === slug);

  return { work };
};

export default WorkPage;
