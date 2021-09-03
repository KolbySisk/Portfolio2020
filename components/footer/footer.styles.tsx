import styled from '@emotion/styled';
import { BreakPoint, MediaQuery, spaced } from '../../styles';

export const Root: any = styled.footer();

export const Logo: any = styled.div([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spaced(4),
    boxSizing: 'content-box',
    svg: {
      height: spaced(5),
    },
  },
  MediaQuery(BreakPoint.medium, { height: spaced(3) }),
]);
