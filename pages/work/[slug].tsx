import React from 'react';
import Head from 'next/head';
import Data from '../../data';
import { useRouter } from 'next/dist/client/router';

const WorkPage = () => {
  const router = useRouter();
  const work = Data.work.find(d => d.slug === router?.query?.slug);

  return (
    <>
      <Head>
        <title>Kolby Sisk - Software engineer</title>
      </Head>

      {work?.component && <work.component work={work} />}
    </>
  );
};

export default WorkPage;
