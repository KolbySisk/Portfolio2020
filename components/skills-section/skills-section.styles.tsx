import styled from '@emotion/styled';
import { Color, spaced } from '../../styles';

export const Root: any = styled.section({
  flex: 1,
  backgroundColor: Color.darkGray,
  padding: `0 ${spaced(4)}px`,
});

export const Title: any = styled.h2({
  marginBottom: spaced(2),
});
