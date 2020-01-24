import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { spaced, MediaQuery, BreakPoint } from '../../styles';

export const Root: any = styled.section();

export const Container: any = styled.div([
  {
    padding: `${spaced(8)}px ${spaced(8)}px calc(${spaced(8)}px - ${spaced(2)}px) ${spaced(8)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MediaQuery(BreakPoint.medium, { padding: spaced(4) }),
]);

export const Skills: any = styled(motion.ul)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 800,
  li: {
    marginRight: spaced(1),
    ':last-of-type': {
      marginRight: 0,
    },
  },
});
