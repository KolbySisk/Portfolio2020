import styled from '@emotion/styled';
import { BreakPoint, MediaQuery } from '../../styles';

export const Root: any = styled.article(
  (props: any) => [
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      width: '50%',
      height: 0,
      paddingBottom: '50%',
      position: 'relative',
    },
  ],
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    paddingBottom: '100%',
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
    height: '100%',
    maxWidth: 'none',
  },
});
