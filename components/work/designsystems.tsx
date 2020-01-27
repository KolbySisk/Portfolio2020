import DoubleColumn from '../double-column';
import WorkBanner from '../work-banner';
import AllProjects from '../all-projects';
import NextProject from '../next-project';
import Footer from '../footer';

export default ({ work, nextWork }: Props) => {
  return (
    <>
      <WorkBanner work={work} />

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
