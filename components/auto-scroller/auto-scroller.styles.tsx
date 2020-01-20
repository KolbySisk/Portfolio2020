import styled from '@emotion/styled';
import { spaced } from '../../styles';

export const Root: any = styled.section((props: any) => [
  {
    backgroundColor: props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${spaced(12)}px 0`,
  },
]);

export const ContentContainer: any = styled.div({
  width: '80%',
  maxWidth: spaced(62),
});
