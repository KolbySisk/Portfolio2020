import styled from '@emotion/styled';
import { Gradient, spaced, MediaQuery, BreakPoint } from '../../styles';

const bgImage = require('../../public/images/trees.png?webp');

export const Root: any = styled.section([Gradient.redToBlue]);

export const IntroContainer: any = styled.section([
  Gradient.redToBlue,
  {
    display: 'flex',
    flexDirection: 'column',
    padding: spaced(4),
    minHeight: 500,
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
  },
  MediaQuery(BreakPoint.medium, {
    flexDirection: 'column',
  }),
]);

export const Logo: any = styled.div({
  width: spaced(12),
  marginBottom: spaced(4),
});

export const LogoText: any = styled.div({
  textIndent: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  lineHeight: 0,
});

export const Intro: any = styled.p([
  {
    width: '100%',
    fontSize: '18px',
    lineHeight: '27px',
    paddingTop: spaced(2),
  },
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    fontSize: 20,
    lineHeight: '26px',
  }),
]);
