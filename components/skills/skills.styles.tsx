import styled from '@emotion/styled';
import { Constant, Color, spaced, TitleFont } from '../../styles';

export const Root: any = styled.section({
  flex: 1,
  backgroundColor: Color.darkGray,
  padding: `0 ${spaced(4)}px`,
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Skills: any = styled.div({
  display: 'grid',
  gridTemplateRows: `${spaced(12)}px ${spaced(12)}px ${spaced(12)}px`,
  gridAutoFlow: 'column dense',
  gridGap: spaced(2),
  overflowX: 'scroll',
  overflowY: 'hidden',
});

const skillTitleColors = [Color.red, Color.blue, Color.purp, Color.green];

export const Skill: any = styled.div((props: any) => [
  {
    width: spaced(12),
    height: spaced(12),
    backgroundColor: Color.white,
    borderRadius: Constant.borderRadius,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default',
    ':hover .skill-title': {
      transform: 'translateY(0)',
      backgroundColor: skillTitleColors[Math.floor(Math.random() * skillTitleColors.length)],
    },
  },
]);

export const SkillTitle: any = styled.div((props: any) => [
  TitleFont,
  {
    width: spaced(12),
    height: spaced(12),
    backgroundColor: Color.white,
    borderRadius: Constant.borderRadius,
    color: Color.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    transform: 'translateY(100%)',
    transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
  },
]);

export const Logo: any = styled.img({});
