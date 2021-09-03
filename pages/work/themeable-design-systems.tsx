import { FaLink } from 'react-icons/fa';
import { FontColor, Color, Container } from '../../styles';
import DoubleColumn from '../../components/double-column';
import WorkBanner from '../../components/work-banner';
import AllProjects from '../../components/all-projects';
import NextProject from '../../components/next-project';
import Footer from '../../components/footer';
import ContactSection from '../../components/contact-section';
import { useWork } from '../../hooks/use-work';
import { useTitle } from '../../hooks/use-title';

export default () => {
  const { work, nextWork } = useWork('themeable-design-systems');
  useTitle(work?.title);

  return (
    <>
      <WorkBanner work={work} />

      <Container>
        <FontColor color={Color.black}>
          <div style={{ padding: '10vw' }}>
            <p style={{ fontSize: '22px', lineHeight: '34px', padding: '0 0 24px 0' }}>
              Themeability is a largely overlooked feature when creating a design system. That’s an
              unfortunate fact as retroactively adding themeability is an arduous process.
              Themeability is a complex feature in that it requires forethought when architecting
              the design library, and the coded component library — but more-so — because it takes a
              bit of orchestrating between the two to get it just right.
            </p>
            <a
              style={{ display: 'inline-block', padding: '24px 0 0 0' }}
              href="https://medium.com/@kolbysisk/themeable-design-systems-313898c07eab"
              target="_blank">
              <picture>
                <source
                  srcSet={require(`../../public/images/work/themeabledesignsystems/banner.png?webp`)}
                  type="image/webp"
                />
                <img
                  style={{ marginBottom: 16 }}
                  src={require(`../../public/images/work/themeabledesignsystems/banner.png`)}
                />
              </picture>
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

      <ContactSection />
    </>
  );
};
