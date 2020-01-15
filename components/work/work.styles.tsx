import styled from '@emotion/styled';
import { Constant, Color, spaced, TitleFont } from '../../styles';

export const Root: any = styled.section({
  height: '100%',
  background: Color.black,
  display: 'flex',
  flexDirection: 'column',
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
    height: spaced(26),
    fontSize: '36px',
    lineHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${spaced(4)}px`,
    backgroundColor: props.color,
  },
]);
