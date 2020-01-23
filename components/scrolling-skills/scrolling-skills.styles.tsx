import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Constant, Color, spaced, TitleFont } from '../../styles';
import Skill from '../skill-card';

export const Root: any = styled.section({
  flex: 1,
  backgroundColor: Color.darkGray,
  padding: `0 ${spaced(4)}px`,
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Skills: any = styled.div({
  overflowX: 'scroll',
  overflowY: 'hidden',
  paddingBottom: spaced(4),
});

export const SkillRow: any = styled(motion.ul)({
  display: 'flex',
  whiteSpace: 'nowrap',
});
