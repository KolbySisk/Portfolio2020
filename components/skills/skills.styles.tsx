import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Constant, Color, spaced, TitleFont } from '../../styles';

export const Root: any = styled.section({
  flex: 1,
  backgroundColor: Color.darkGray,
  padding: `0 ${spaced(4)}px`,
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Skills: any = styled(motion.ul)({
  display: 'grid',
  gridTemplateRows: `${spaced(8)}px ${spaced(8)}px ${spaced(8)}px`,
  gridAutoFlow: 'column',
  gridGap: spaced(1),
  overflowX: 'scroll',
  overflowY: 'hidden',
  paddingBottom: spaced(4),
});

const skillTitleColors = [Color.red, Color.blue, Color.purp, Color.green];

export const Skill: any = styled(motion.li)((props: any) => [
  {
    width: spaced(8),
    height: spaced(8),
    backgroundColor: Color.white,
    borderRadius: Constant.borderRadius,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default',
    ':hover .skill-title': {
      transform: 'translateY(0)',
      opacity: 1,
      backgroundColor: skillTitleColors[Math.floor(Math.random() * skillTitleColors.length)],
    },
    ':nth-of-type(3n-1)': {
      transform: `translateX(${spaced(6)}px)`,
    },
  },
]);

export const SkillTitle: any = styled.div((props: any) => [
  TitleFont,
  {
    width: spaced(8),
    height: spaced(8),
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
    opacity: 0,
    fontSize: 10,
    padding: spaced(1 / 2),
    lineHeight: '14px',
  },
]);

export const Logo: any = styled.img({});
