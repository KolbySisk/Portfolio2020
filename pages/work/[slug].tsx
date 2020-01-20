import React from 'react';
import Head from 'next/head';
import Data from '../../data';
import { Color, FontColor, ElementSpacing, TextCenter, DoubleColumn } from '../../styles';
import CenterBanner from '../../components/center-banner';
import WorkBanner from '../../components/work-banner';
import ContentSquare from '../../components/content-square';
import ImageSquare from '../../components/image-square';
import SkillsBanner from '../../components/skills-banner';

const WorkPage = ({ work }) => {
  return (
    <>
      <Head>
        <title>Kolby Sisk - Software engineer</title>
      </Head>
      <WorkBanner work={work} />

      <DoubleColumn>
        <ContentSquare backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <p>
            Eraise is a passion project that I worked on in my spare time over the course of 6
            months. I challenged myself to create a tool that could be used to help people
            struggling with student loan debt. The solution I came up with is a platform where users
            could receive donations that would be sent directly to their loan provider. Donators can
            choose to donate - once or monthly - to a random user, or explore the community and
            donate to a specific user.
          </p>
        </ContentSquare>

        <ImageSquare>
          <picture>
            <source
              srcSet={require(`../../public/images/work/eraise/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/eraise/about.png`)} />
          </picture>
        </ImageSquare>
      </DoubleColumn>
      <CenterBanner backgroundColor={Color.silver}>
        <FontColor color={Color.darkGray}>
          <ElementSpacing>
            <TextCenter>
              <h2>Challenge</h2>
            </TextCenter>
          </ElementSpacing>
          <p>
            Design and build an automated, secure, optimized, and scalable app along with the
            supporting company infrastructure. Research and roll a stack with the most effect
            technologies available in the given ecosystem. Learn new and exciting technologies while
            exercising design skills.
          </p>
        </FontColor>
      </CenterBanner>
      <SkillsBanner skills={work.skills} />
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

  return { work };
};

export default WorkPage;
