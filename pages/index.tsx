import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Data from '../data';
import Introduction from '../components/introduction';
import Skills from '../components/skills';
import Work from '../components/work';

import { BreakPoint, MediaQuery } from '../styles/responsive';

const Home = () => (
  <>
    <Head>
      <title>Kolby Sisk - Software engineer</title>
    </Head>

    <Columns>
      <IntroColumn>
        <Introduction intro={Data.intro} />
        <Skills skills={Data.skills} />
      </IntroColumn>
      <WorkColumn>
        <Work work={Data.work} tags={Data.tags} />
      </WorkColumn>
    </Columns>
  </>
);

export const Columns = styled.div([
  {
    display: 'flex',
    height: '100%',
  },
  MediaQuery(BreakPoint.medium, {
    flexDirection: 'column',
    height: 'auto',
  }),
]);

export const IntroColumn = styled.div((props: any) => [
  {
    width: '60%',
    maxWidth: '710px',
    display: 'flex',
    flexDirection: 'column',
  },
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    maxWidth: 'none',
  }),
]);

export const WorkColumn = styled.div((props: any) => [
  {
    flex: 1,
  },
]);

export default Home;
