import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Data from '../../data';
import ContactSection from '../../components/contact-section';

const WorkPage = () => {
  const router = useRouter();
  const work = Data.work.find(d => d.slug === router?.query?.slug);
  const nextWork = Data.work[Data.work.indexOf(work) + 1] || Data.work[0];

  return (
    <>
      <Head>
        <title>Kolby Sisk - Software engineer</title>
      </Head>

      {work?.component && <work.component work={work} nextWork={nextWork} />}

      <ContactSection />
    </>
  );
};

export default WorkPage;
