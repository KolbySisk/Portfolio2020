import styled from '@emotion/styled';
import { Constant, Color, spaced } from '../../styles';

export const Tag: any = styled.button((props: any) => [
  {
    backgroundColor: props.active ? Color.red : Color.white,
    borderRadius: Constant.borderRadius,
    fontSize: 12,
    padding: '4px 16px',
    color: Color.black,
  },
]);
