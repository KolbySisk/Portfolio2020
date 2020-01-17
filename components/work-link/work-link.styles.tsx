import styled from '@emotion/styled';
import { Constant, TitleFont, spaced } from '../../styles';

export const Work: any = styled.a((props: any) => [
  TitleFont,
  {
    width: '100%',
    height: spaced(22),
    fontSize: '36px',
    lineHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${spaced(4)}px`,
    backgroundColor: props.color,
    textShadow: `0 2px 2px rgba(63, 81, 181, .4)`,
  },
]);
