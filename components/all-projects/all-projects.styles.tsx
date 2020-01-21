import styled from '@emotion/styled';
import { spaced, Color } from '../../styles';

export const Link: any = styled.a({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: spaced(30),
  backgroundColor: Color.black,
  flex: 1,
  minHeight: spaced(16),
});
