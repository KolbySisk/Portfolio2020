import { FaLink } from 'react-icons/fa';
import DoubleColumn from '../double-column';
import WorkBanner from '../work-banner';
import AllProjects from '../all-projects';
import NextProject from '../next-project';
import Footer from '../footer';
import { FontColor, Color, Container } from '../../styles';

export default ({ work, nextWork }: Props) => {
  return (
    <>
      <WorkBanner work={work} />

      <Container>
        <FontColor color={Color.black}>
          <div style={{ padding: '10vw' }}>
            <p style={{ fontSize: '22px', lineHeight: '34px', padding: '0 0 24px 0' }}>
              Back in 2017 I started a new job architecting and building design systems at a fortune
              500 tech company. During these three years there have been drastic improvements to the
              design system ecosystem. Design tools like Figma with a focus on building and
              supporting design systems have started growing in popularity. Code tools like Stencil
              have been cranking out features making component libraries easier to build. It’s an
              exciting time to be part of a design system team, but with the booming changes of the
              landscape, it can be a daunting project.
            </p>
            <picture>
              <source
                srcSet={require(`../../public/images/work/designsystems2020/design-system-diagram.png?webp`)}
                type="image/webp"
              />
              <img
                src={require(`../../public/images/work/designsystems2020/design-system-diagram.png`)}
              />
            </picture>
            <a
              style={{ display: 'inline-block', padding: '24px 0 0 0' }}
              href="https://medium.com/@kolbysisk/the-state-of-design-systems-in-2020-d8f580c54b39">
              <FaLink style={{ fontSize: 14, marginRight: 8 }} />
              Check out the full article on Medium.
            </a>
          </div>
        </FontColor>
      </Container>

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
