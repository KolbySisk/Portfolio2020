import styled from '@emotion/styled';
import { Gradient, spaced, MediaQuery, BreakPoint, Color } from '../../styles';

const bgImage = require('../../public/images/trees.png?webp&size=710');

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
    backgroundSize: '100%',
  },
  MediaQuery(BreakPoint.medium, {
    flexDirection: 'column',
  }),
  MediaQuery(BreakPoint.small, {
    backgroundSize: 'auto',
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

export const SocialLinks: any = styled.div([{ marginTop: spaced(4) }]);
export const SocialLink: any = styled.a([
  {
    marginRight: spaced(3),
    whiteSpace: 'nowrap',
    display: 'inline-block',
    ':hover': {
      color: Color.green,
    },
  },
]);
