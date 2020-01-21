import styled from '@emotion/styled';
import { spaced, MediaQuery, BreakPoint } from '../../styles';

export const Root: any = styled.section(
  (props: any) => [
    {
      backgroundColor: props.backgroundColor,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: `${spaced(12)}px 0`,
    },
  ],
  MediaQuery(BreakPoint.medium, {
    padding: `${spaced(8)}px 0`,
    h2: {
      textAlign: 'left',
    },
  })
);

export const ContentContainer: any = styled.div({
  width: '80%',
  maxWidth: spaced(62),
});
