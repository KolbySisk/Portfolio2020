import styled from '@emotion/styled';
import { MediaQuery, BreakPoint } from '../../styles';

const DoubleColumn: any = styled.div((props: any) => [
  {
    display: 'flex',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
  },
  MediaQuery(BreakPoint.medium, { flexDirection: 'column' }),
]);

export default DoubleColumn;
