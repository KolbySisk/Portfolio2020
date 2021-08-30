import styled from '@emotion/styled';
import { Color, spaced, MediaQuery, BreakPoint } from '../../styles';
import { keyframes } from '@emotion/core';
import { motion } from 'framer-motion';

export const Root: any = styled.section({
  height: '100%',
  background: Color.black,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const Header: any = styled.header({
  padding: spaced(4),
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Tags: any = styled.div({
  button: {
    marginRight: spaced(1),
  },
});

export const Works: any = styled(motion.div)({
  overflow: 'auto',
});

export const ScrollHint: any = styled.div((props: any) => [
  {
    position: 'absolute',
    left: '50%',
    bottom: 20,
    transform: 'translateX(-50%)',
    fontSize: '38px',
    animation: `${bounce} 1s ease infinite`,
    filter: `drop-shadow( 0 3px 8px rgba(0, 0, 0, .4))`,
  },
  MediaQuery(BreakPoint.medium, {
    display: 'none',
  }),
]);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translateY(0);
  }

  40%, 43% {
    transform: translateY(-30px);
  }

  70% {
    transform: translateY(-15px);
  }

  90% {
    transform: translateY(4px);
  }
`;
