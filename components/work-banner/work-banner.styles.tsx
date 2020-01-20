import styled from '@emotion/styled';
import { Constant, TitleFont, spaced } from '../../styles';

export const Work: any = styled.div((props: any) => [
  TitleFont,
  {
    width: '100%',
    height: spaced(36),
    fontSize: '36px',
    lineHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${spaced(4)}px`,
    backgroundColor: props.color,
    textShadow: `0 2px 2px rgba(63, 81, 181, .4)`,
    textAlign: 'center',
  },
]);

export const Title: any = styled.h1((props: any) => [
  TitleFont,
  {
    fontSize: '52px',
    textShadow: `0 2px 2px rgba(63, 81, 181, .4)`,
    textAlign: 'center',
    width: '100%',
  },
]);
