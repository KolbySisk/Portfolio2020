import { Color, DoubleColumn, ElementSpacing, FontColor, TextCenter } from '../../styles';
import ContentSquare from '../content-square';
import ImageSquare from '../image-square';
import CenterBanner from '../center-banner';
import SkillsBanner from '../skills-banner';
import WorkBanner from '../work-banner';

const Nui = ({ work }: Props) => {
  return (
    <>
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

interface Props {
  work: any;
}

export default Nui;
