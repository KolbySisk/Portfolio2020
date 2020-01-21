import styled from '@emotion/styled';
import { spaced, Color } from '../../styles';

export const Link: any = styled.a((props: any) => [
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: spaced(30),
    backgroundColor: props.backgroundColor ? props.backgroundColor : Color.black,
    flex: 1,
    minHeight: spaced(16),
    textShadow: `0 2px 2px rgba(0,0,0, .4)`,
  },
]);
