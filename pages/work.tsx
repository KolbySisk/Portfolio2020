import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import Data from '../data';
import WorkSection from '../components/work-section';
import ContactSection from '../components/contact-section';
import { Color } from '../styles';

const Work = () => (
  <>
    <Head>
      <title>Kolby Sisk - Software engineer</title>
    </Head>

    <Link href={`/`}>
      <Logo
        dangerouslySetInnerHTML={{
          __html: require('../public/images/logo-white.svg?include&size=80'),
        }}
      />
    </Link>

    <WorkSection work={Data.work} tags={Data.tags} />

    <ContactSection />
  </>
);

export const Logo = styled.div((props: any) => [
  {
    backgroundColor: Color.red,
    svg: {
      height: 40,
      padding: 32,
      boxSizing: 'content-box',
    },
  },
]);

export default Work;
