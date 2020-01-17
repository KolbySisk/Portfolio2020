import styled from '@emotion/styled';
import { Color, spaced } from '../../styles';

export const Root: any = styled.article((props: any) => [
  {
    backgroundColor: props.backgroundColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 640,
  },
]);

export const ContentContainer: any = styled.div({
  width: '80%',
  maxWidth: spaced(62),
});
