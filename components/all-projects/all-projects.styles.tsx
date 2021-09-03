import styled from '@emotion/styled';
import { spaced, Color, MediaQuery, BreakPoint } from '../../styles';

export const Link: any = styled.a([
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: spaced(30),
    backgroundColor: Color.black,
    minHeight: spaced(16),
    width: '25%',
  },
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    height: spaced(5),
  }),
]);
