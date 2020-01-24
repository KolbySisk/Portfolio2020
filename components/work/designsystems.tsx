import { Color, ElementSpacing, FontColor, TextCenter } from '../../styles';
import DoubleColumn from '../double-column';
import ContentSquare from '../content-square';
import ImageSquare from '../image-square';
import CenterBanner from '../center-banner';
import SkillsBanner from '../skills-banner';
import WorkBanner from '../work-banner';
import AllProjects from '../all-projects';
import NextProject from '../next-project';
import Footer from '../footer';

export default ({ work, nextWork }: Props) => {
  return (
    <>
      <WorkBanner work={work} />

      <div>
        <iframe
          style={{ width: '100%', height: 900 }}
          src="https://medium.com/retainable/how-to-embed-medium-on-your-website-the-easy-way-41ac0a13231e#article"></iframe>
      </div>

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
