import React from 'react';
import Head from 'next/head';
import Data from '../../data';

const WorkPage = ({ work }) => {
  return (
    <>
      <Head>
        <title>Kolby Sisk - Software engineer</title>
      </Head>

      {console.log(work.component)}

      {/* <work.component work={work} /> */}
    </>
  );
};

WorkPage.getInitialProps = async context => {
  const { slug } = context.query;
  const work = Data.work.find(d => d.slug === slug);

  if (!work) {
    context.res.writeHead(404);
    return { err: { statusCode: 404 } };
  }

  console.log(work);

  return { work };
};

export default WorkPage;
