import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Constant, Color, spaced, TitleFont } from '../../styles';

const skillTitleColors = [Color.red, Color.blue, Color.purp, Color.green];

export const Skill: any = styled(motion.li)((props: any) => [
  {
    flexShrink: 0,
    width: spaced(8),
    height: spaced(8),
    backgroundColor: Color.white,
    borderRadius: Constant.borderRadius,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'default',
    marginRight: spaced(1),
    marginBottom: spaced(1),
    ':hover .skill-title': {
      transform: 'translateY(0)',
      opacity: 1,
      backgroundColor: skillTitleColors[Math.floor(Math.random() * skillTitleColors.length)],
    },
    ':nth-of-type(3n-1)': {
      transform: `translateX(${spaced(6)}px)`,
    },
    ':last-of-type': {
      marginRight: 0,
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
