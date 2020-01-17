import styled from '@emotion/styled';
import { Color, spaced, TitleFont, MediaQuery, BreakPoint } from '../../styles';
import { keyframes } from '@emotion/core';

export const Root: any = styled.section({
  height: '100%',
  background: Color.black,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const Header: any = styled.header({
  padding: spaced(4),
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});

export const Tags: any = styled.div({
  button: {
    marginRight: spaced(1),
  },
});

export const Works: any = styled.div({
  overflow: 'auto',
});

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
    color: props.color,
    backgroundColor: Color.darkGray,
    borderBottom: `solid 4px ${props.color}`,
  },
]);

export const ScrollHint: any = styled.div((props: any) => [
  {
    position: 'absolute',
    left: '50%',
    bottom: 20,
    transform: 'translateX(-50%)',
    fontSize: '38px',
    animation: `${bounce} 1s ease infinite`,
    filter: `drop-shadow( 0 3px 8px rgba(0, 0, 0, .4))`,
  },
  MediaQuery(BreakPoint.medium, {
    display: 'none',
  }),
]);

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translateY(0);
  }

  40%, 43% {
    transform: translateY(-30px);
  }

  70% {
    transform: translateY(-15px);
  }

  90% {
    transform: translateY(4px);
  }
`;
