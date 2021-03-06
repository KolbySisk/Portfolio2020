import styled from '@emotion/styled';
import { spaced, MediaQuery, BreakPoint } from '../../styles';

export const Root: any = styled.article((props: any) => [
  {
    backgroundColor: props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 0,
    paddingBottom: '33.333%',
    position: 'relative',
    overflow: 'hidden',
  },
  MediaQuery(BreakPoint.medium, {
    width: '100%',
    paddingBottom: 0,
    height: 'auto',
  }),
]);

export const ContentContainer: any = styled.div([
  {
    width: '80%',
    maxWidth: spaced(62),
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  MediaQuery(BreakPoint.medium, {
    position: 'static',
    transform: 'translateY(0)',
    padding: `${spaced(8)}px 0`,
  }),
]);
