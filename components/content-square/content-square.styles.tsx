import styled from '@emotion/styled';
import { Color, spaced, MediaQuery, BreakPoint } from '../../styles';

export const Root: any = styled.article((props: any) => [
  {
    backgroundColor: props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 0,
    paddingBottom: '50%',
    position: 'relative',
  },
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    paddingBottom: '100%',
  }),
]);

export const ContentContainer: any = styled.div({
  width: '80%',
  maxWidth: spaced(62),
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});
