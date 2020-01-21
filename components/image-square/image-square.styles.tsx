import styled from '@emotion/styled';
import { BreakPoint, MediaQuery, Color } from '../../styles';

export const Root: any = styled.article(
  (props: any) => [
    {
      backgroundColor: props.backgroundColor ? props.backgroundColor : Color.white,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '50%',
      height: 0,
      paddingBottom: '33.333%',
      position: 'relative',
    },
  ],
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    paddingBottom: '66.666%',
  })
);

export const ContentContainer: any = styled.div({
  display: 'flex',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  img: {
    width: '100%',
    maxWidth: 'none',
  },
});
