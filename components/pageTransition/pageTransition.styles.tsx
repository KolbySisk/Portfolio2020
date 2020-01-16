import styled from '@emotion/styled';
import { Color, spaced, MediaQuery, BreakPoint } from '../../styles';
import { motion } from 'framer-motion';

const trees = require('../../public/images/tree-top.png?webp');

export const Root: any = styled.div({
  height: '100%',
});

export const Overlay: any = styled(motion.div)(() => [
  {
    position: 'fixed',
    height: 'calc(100% + 75px)',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    transform: 'translateY(100%)',
    display: 'flex',
    flexDirection: 'column',
  },
]);

export const Trees: any = styled.div({
  backgroundImage: `url(${trees})`,
  backgroundRepeat: 'repeat-x',
  width: '100%',
  height: '75px',
});

export const Background: any = styled.div({
  backgroundColor: Color.darkGray,
  width: '100%',
  flex: 1,
  marginTop: -2,
});
