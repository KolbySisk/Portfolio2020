import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import CenterBanner from '../center-banner';
import SkillsBanner from '../skills-banner';
import DoubleColumn from '../double-column';
import WorkBanner from '../work-banner';
import AllProjects from '../all-projects';
import NextProject from '../next-project';
import Footer from '../footer';
import Animator, { ContainerType } from '../animator';

export default ({ work, nextWork }: Props) => {
  return (
    <>
      <WorkBanner work={work} />
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.darkGray}>
          <ElementSpacing>
            <h2>About</h2>
          </ElementSpacing>
          <p>
            For the last 2.5 years I’ve been working at NCR on a team that builds NUI - NCR’s design
            system. Coming into my role as one of only two engineers on the team I was immediately
            presented with challenging problems to solve. I was excited to say the least.
          </p>
        </Animator>

        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/about.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/about.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>

      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.silver}>
        <FontColor color={Color.darkGray}>
          <ElementSpacing>
            <TextCenter>
              <h2>Challenge</h2>
            </TextCenter>
          </ElementSpacing>
          <p>
            Architect and build a design system that provides the utmost value to the organization
            while meeting the business needs of various influences from within. Leadership had a
            strong focus on moving quickly, and with such a small team to work with I was required
            to scope and architect the system accordingly.
          </p>
        </FontColor>
      </Animator>

      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Architecture</h2>
          </ElementSpacing>
          <p>
            I worked with a small team dedicated to building the design system. We architected a
            slim, scalable system able to meet the needs of a fortune 500 tech company with software
            on everything from an atm machine to movie ticket kiosk. Utilizing open source solutions
            and engineering efforts, we were able to architect an elegant solution given the
            requirements.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/architecture.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/architecture.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Leadership</h2>
            </ElementSpacing>
            <p>
              During my time working on NUI I was often the lead of larger efforts. The scope of
              these efforts, in the context of a highly corporate environment, were immense. Luckily
              I had an amazing and talented team to work with. We were able to finish our efforts on
              time while gathering - and meeting - the business requirements.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/leadership.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/leadership.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Systems &amp; Processes</h2>
          </ElementSpacing>
          <p>
            When I joined NCR the NUI team was still in its infancy. The supporting systems needed
            for NUI were not developed. My first tasks was to develop these systems. I created
            systems for documenting team knowledge like server info, team processes, project
            information. I engineered a CI/CD process for NUI that helped to automate various devops
            processes while developing. I architected a governance system for scaling and growing
            NUI.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/systems.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/systems.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <SkillsBanner skills={work.skills} />
      <DoubleColumn reverse={true}>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={Color.silver}>
          <FontColor color={Color.darkGray}>
            <ElementSpacing>
              <h2>Component Libraries</h2>
            </ElementSpacing>
            <p>
              With the supporting development systems in place I started the next large effort -
              building my first component library. The goal was to make a library containing Angular
              components that could easily be used throughout NCR. The scope was large, but I
              enjoyed the process and learn a ton. I started by digging through Google’s Angular
              Material code, then I dug through Angular’s code. I learned Angular inside and out
              along with the best practices for creating angular component libraries. Then I
              architected and built the component library. I implemented accessibility solutions,
              optimizations, unit tests, technical documentation and much more.
            </p>
          </FontColor>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/components.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/components.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <DoubleColumn>
        <Animator containerType={ContainerType.ContentSquare} backgroundColor={work.color}>
          <ElementSpacing>
            <h2>Mentoring & teaching </h2>
          </ElementSpacing>
          <p>
            When I wasn’t working directly on NUI I was mentoring people throughout the NCR. I
            worked with developers and designers and provided guidance, advice, and constructive
            criticism. While doing so I learned that teaching is a great tool for learning.
          </p>
        </Animator>
        <Animator containerType={ContainerType.ImageSquare}>
          <picture>
            <source
              srcSet={require(`../../public/images/work/nui/teaching.png?webp`)}
              type="image/webp"
            />
            <img src={require(`../../public/images/work/nui/teaching.png`)} />
          </picture>
        </Animator>
      </DoubleColumn>
      <Animator containerType={ContainerType.CenterBanner} backgroundColor={Color.darkGray}>
        <ElementSpacing>
          <TextCenter>
            <h2>Results</h2>
          </TextCenter>
        </ElementSpacing>
        <p>
          During my time at NCR I was able to accomplish and learn so much more than I dreamed
          possible. My team and I were able to build the design system NCR needed. The impact NUI
          had at NCR is huge. Not only were we able to provide value to designers and developers
          with NUI, but we also cultivated an environment that encourages sharing and learning.
        </p>
      </Animator>
      <DoubleColumn>
        <AllProjects />
        <NextProject work={nextWork} />
      </DoubleColumn>
      <Footer />
    </>
  );
};

interface Props {
  work: any;
  nextWork: any;
}
