import styled from '@emotion/styled';
import { BreakPoint, MediaQuery, Color, spaced } from '../../styles';

export const Root: any = styled.footer();

export const Logo: any = styled.div([
  {
    display: 'flex',
    height: spaced(5),
    width: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${spaced(6)}px`,
    boxSizing: 'content-box',
    svg: {
      height: '100%',
    },
  },
  MediaQuery(BreakPoint.medium, { height: spaced(3) }),
]);
