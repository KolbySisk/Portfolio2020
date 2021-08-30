import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import Data from '../data';
import IntroductionSection from '../components/introduction-section';
import SkillsSection from '../components/skills-section';
import WorkSection from '../components/work-section';
import ContactSection from '../components/contact-section';
import { BreakPoint, MediaQuery } from '../styles/responsive';

const Home = () => (
  <>
    <Head>
      <title>Kolby Sisk - Software engineer</title>
    </Head>

    <Columns>
      <IntroColumn>
        <IntroductionSection intro={Data.intro} socialLinks={Data.socialLinks} />
        <SkillsSection skills={Data.skills} />
      </IntroColumn>
      <WorkColumn>
        <WorkSection work={Data.work} tags={Data.tags} />
      </WorkColumn>
    </Columns>

    <ContactSection />
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
    overflow: 'auto',
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
