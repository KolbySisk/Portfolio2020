import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Data from '../data';
import Introduction from '../components/introduction';
import Skills from '../components/skills';

export const Columns = styled.div({
  display: 'flex',
  height: '100%',
});
export const Column = styled.div((props: any) => [
  {
    background: 'blue',
    width: props.width ? props.width : 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
]);

const Home = () => (
  <>
    <Head>
      <title>Kolby Sisk - Software engineer</title>
    </Head>

    <Columns>
      <Column width="50%">
        <Introduction intro={Data.intro} />
        <Skills skills={Data.skills} />
      </Column>
      <Column width="50%">Projects</Column>
      {/* <Column width="20%">Contact</Column> */}
    </Columns>
  </>
);

export default Home;
